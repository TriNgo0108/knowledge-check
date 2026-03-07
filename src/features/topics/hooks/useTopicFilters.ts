import { useState, useMemo } from "react";
import { categories } from "@features/topics/constants/topics";

export function useTopicFilters() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return searchQuery.trim()
      ? categories
          .map((cat) => ({
            ...cat,
            topics: cat.topics.filter((t) =>
              t.title.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
          }))
          .filter((cat) => cat.topics.length > 0)
      : categories;
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredCategories,
  };
}
