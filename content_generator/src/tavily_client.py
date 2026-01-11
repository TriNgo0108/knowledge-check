"""Tavily API client for searching latest content."""

from tavily import TavilyClient

from .config import TAVILY_API_KEY


class TavilySearchClient:
    """Wrapper for Tavily search API."""

    def __init__(self, api_key: str | None = None):
        self.client = TavilyClient(api_key=api_key or TAVILY_API_KEY)

    def search(
        self,
        query: str,
        max_results: int = 10,
        search_depth: str = "advanced",
        include_answer: bool = True,
    ) -> dict:
        """
        Search for content using Tavily API.

        Args:
            query: Search query string
            max_results: Maximum number of results to return
            search_depth: 'basic' or 'advanced' for more comprehensive results
            include_answer: Whether to include AI-generated answer

        Returns:
            Search results with answer, results list, and metadata
        """
        response = self.client.search(
            query=query,
            max_results=max_results,
            search_depth=search_depth,
            include_answer=include_answer,
        )
        return response

    def search_topic(self, topic_query: str) -> str:
        """
        Search for a topic and return combined content.

        Args:
            topic_query: The topic-specific search query

        Returns:
            Combined content from search results
        """
        response = self.search(topic_query)

        # Combine the AI answer with top results content
        content_parts = []

        if response.get("answer"):
            content_parts.append(f"Summary: {response['answer']}")

        for result in response.get("results", [])[:5]:
            title = result.get("title", "")
            content = result.get("content", "")
            if title and content:
                content_parts.append(f"## {title}\n{content}")

        return "\n\n".join(content_parts)
