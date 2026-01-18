#!/usr/bin/env python3
"""CLI script to generate quiz questions."""

import argparse
import sys
from pathlib import Path

# Add src to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from src import TOPICS, QuestionGenerator, DataExporter


def main():
    parser = argparse.ArgumentParser(
        description="Generate quiz questions using Tavily search and OpenRouter LLM"
    )
    parser.add_argument(
        "--topic",
        type=str,
        choices=TOPICS,
        help="Single topic to generate questions for",
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Generate questions for all topics",
    )
    parser.add_argument(
        "--count",
        type=int,
        default=100,
        help="Number of questions per topic (default: 100)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print questions without saving to files",
    )
    parser.add_argument(
        "--topics",
        type=str,
        nargs="+",
        choices=TOPICS,
        help="Multiple topics to generate questions for",
    )

    args = parser.parse_args()

    # Validate arguments
    if not args.topic and not args.all and not args.topics:
        parser.error("Must specify --topic, --topics, or --all")

    # Determine topics to generate
    if args.all:
        topics = TOPICS
    elif args.topics:
        topics = args.topics
    else:
        topics = [args.topic]

    print("\n🚀 Content Generator")
    print(f"   Topics: {', '.join(topics)}")
    print(f"   Questions per topic: {args.count}")
    print(f"   Mode: {'Dry run' if args.dry_run else 'Save to files'}")

    # Generate questions
    generator = QuestionGenerator()
    exporter = DataExporter()

    for topic in topics:
        try:
            result = generator.generate_for_topic(topic, args.count)

            if args.dry_run:
                print(f"\n📋 Preview for {topic}:")
                for q in result.questions[:3]:
                    print(f"\n   Q{q.id}: {q.question}")
                    print(f"   Options: {q.options}")
                    print(f"   Answer: {q.answer}")
                print(f"   ... and {len(result.questions) - 3} more questions")
            else:
                exporter.export(result)

        except Exception as e:
            print(f"\n❌ Error generating {topic}: {e}")
            if not args.all:
                sys.exit(1)

    # Update index file
    if not args.dry_run:
        exporter.update_index()

    print("\n✅ Generation complete!")


if __name__ == "__main__":
    main()
