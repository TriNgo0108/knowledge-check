"""Pydantic models for question validation."""

from pydantic import BaseModel, field_validator
from typing import Literal


class Question(BaseModel):
    """A single quiz question."""

    id: int
    question: str
    options: list[str]
    answer: str
    explanation: str
    difficulty: Literal["Beginner", "Intermediate", "Advanced"]

    @field_validator("options")
    @classmethod
    def validate_options(cls, v: list[str]) -> list[str]:
        if len(v) != 4:
            raise ValueError("Must have exactly 4 options")
        if len(set(v)) != 4:
            raise ValueError("All options must be unique")
        return v

    @field_validator("answer")
    @classmethod
    def validate_answer(cls, v: str, info) -> str:
        options = info.data.get("options", [])
        if options and v not in options:
            raise ValueError("Answer must be one of the options")
        return v


class GeneratedQuestions(BaseModel):
    """Collection of generated questions for a topic."""

    topic: str
    questions: list[Question]
    generated_at: str

    @field_validator("questions")
    @classmethod
    def validate_question_count(cls, v: list[Question]) -> list[Question]:
        if len(v) == 0:
            raise ValueError("Must have at least one question")
        return v
