"""Export generated questions to TypeScript format."""

from datetime import datetime
from pathlib import Path

from .config import OUTPUT_DIR
from .models import GeneratedQuestions


class DataExporter:
    """Export questions to TypeScript files."""

    def __init__(self, output_dir: Path | None = None):
        self.output_dir = output_dir or OUTPUT_DIR
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def export(self, data: GeneratedQuestions) -> Path:
        """
        Export questions to a TypeScript file.

        Args:
            data: GeneratedQuestions object to export

        Returns:
            Path to the created file
        """
        # Generate filename with date
        date_str = datetime.now().strftime("%Y_%m_%d")
        filename = f"{data.topic}_week_{date_str}.ts"
        filepath = self.output_dir / filename

        # Build TypeScript content
        ts_content = self._build_typescript(data)

        # Write file
        filepath.write_text(ts_content, encoding="utf-8")
        print(f"📝 Exported to: {filepath}")

        return filepath

    def _build_typescript(self, data: GeneratedQuestions) -> str:
        """Build TypeScript file content."""
        lines = [
            "import { Question } from '@/data/types';",
            "",
            f"// Generated: {data.generated_at}",
            f"// Topic: {data.topic}",
            f"// Questions: {len(data.questions)}",
            "",
            "const questions: Question[] = [",
        ]

        for q in data.questions:
            lines.append("  {")
            lines.append(f"    id: {q.id},")
            lines.append(f"    question: {self._escape_string(q.question)},")
            lines.append("    options: [")
            for opt in q.options:
                lines.append(f"      {self._escape_string(opt)},")
            lines.append("    ],")
            lines.append(f"    answer: {self._escape_string(q.answer)},")
            lines.append(f"    explanation: {self._escape_string(q.explanation)},")
            lines.append(f"    difficulty: {self._escape_string(q.difficulty)},")
            lines.append("  },")

        lines.append("];")
        lines.append("")
        lines.append("export default questions;")
        lines.append("")

        return "\n".join(lines)

    def _escape_string(self, s: str) -> str:
        """Escape a string for TypeScript."""
        # Escape special characters
        s = s.replace("\\", "\\\\")
        s = s.replace('"', '\\"')
        s = s.replace("\n", "\\n")
        s = s.replace("\r", "")
        return f'"{s}"'

    def create_index(self) -> Path:
        """
        Create an index.ts file that exports all generated tests.

        Returns:
            Path to the index file
        """
        filepath = self.output_dir / "index.ts"

        # Find all generated files
        files = sorted(self.output_dir.glob("*_week_*.ts"))

        if not files:
            # Create empty index
            filepath.write_text(
                "// No generated tests yet\nexport const generatedTests: Record<string, never> = {};\n",
                encoding="utf-8",
            )
            return filepath

        # Group by topic
        topics: dict[str, list[str]] = {}
        for f in files:
            parts = f.stem.split("_week_")
            if len(parts) == 2:
                topic = parts[0]
                date = parts[1]
                if topic not in topics:
                    topics[topic] = []
                topics[topic].append(date)

        # Build index content
        lines = [
            "// Auto-generated index of all generated tests",
            "import { Question } from '@/data/types';",
            "",
        ]

        # Import all files
        for topic, dates in sorted(topics.items()):
            for date in sorted(dates):
                var_name = f"{topic}_{date}".replace("-", "_")
                lines.append(f"import {var_name} from './{topic}_week_{date}';")

        lines.append("")
        lines.append("export interface GeneratedTest {")
        lines.append("  topic: string;")
        lines.append("  date: string;")
        lines.append("  displayName: string;")
        lines.append("  questions: Question[];")
        lines.append("}")
        lines.append("")
        lines.append("export const generatedTests: GeneratedTest[] = [")

        for topic, dates in sorted(topics.items()):
            for date in sorted(dates):
                var_name = f"{topic}_{date}".replace("-", "_")
                display_date = date.replace("_", "-")
                lines.append("  {")
                lines.append(f'    topic: "{topic}",')
                lines.append(f'    date: "{display_date}",')
                lines.append(f'    displayName: "Week of {display_date}",')
                lines.append(f"    questions: {var_name},")
                lines.append("  },")

        lines.append("];")
        lines.append("")
        lines.append(
            "export function getTestsForTopic(topic: string): GeneratedTest[] {"
        )
        lines.append("  return generatedTests.filter(t => t.topic === topic);")
        lines.append("}")
        lines.append("")

        filepath.write_text("\n".join(lines), encoding="utf-8")
        print(f"📝 Updated index: {filepath}")

        return filepath
