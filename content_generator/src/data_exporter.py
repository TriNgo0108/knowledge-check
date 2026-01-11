"""Export generated questions to JSON format."""

import json
from datetime import datetime
from pathlib import Path

from .config import PROJECT_ROOT
from .models import GeneratedQuestions


class DataExporter:
    """Export questions to JSON files."""

    def __init__(self, output_dir: Path | None = None):
        self.output_dir = output_dir or (PROJECT_ROOT / "data" / "generated")
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def export(self, data: GeneratedQuestions) -> Path:
        """
        Export questions to a JSON file.

        Args:
            data: GeneratedQuestions object to export

        Returns:
            Path to the created file
        """
        # Generate filename with date
        date_str = datetime.now().strftime("%Y_%m_%d")
        filename = f"{data.topic}_week_{date_str}.json"
        filepath = self.output_dir / filename

        # Build JSON content
        questions_list = [q.model_dump() for q in data.questions]

        # Write file
        filepath.write_text(
            json.dumps(questions_list, indent=2, ensure_ascii=False), encoding="utf-8"
        )
        print(f"📝 Exported to: {filepath}")

        return filepath

    def update_index(self) -> Path:
        """
        Update the index.json file with all generated tests.

        Returns:
            Path to the index file
        """
        filepath = self.output_dir / "index.json"

        # Find all generated files
        files = sorted(self.output_dir.glob("*_week_*.json"))

        if not files:
            # Create empty index
            filepath.write_text("[]", encoding="utf-8")
            return filepath

        # Build index entries
        entries = []
        for f in files:
            if f.name == "index.json":
                continue
            parts = f.stem.split("_week_")
            if len(parts) == 2:
                topic = parts[0]
                date = parts[1].replace("_", "-")
                entries.append(
                    {
                        "topic": topic,
                        "date": date,
                        "displayName": f"Week of {date}",
                        "file": f.name,
                    }
                )

        filepath.write_text(
            json.dumps(entries, indent=2, ensure_ascii=False), encoding="utf-8"
        )
        print(f"📝 Updated index: {filepath}")

        return filepath
