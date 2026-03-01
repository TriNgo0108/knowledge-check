import { ArrowUpDown } from "lucide-react";

export function ImportExportButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      id="data-transfer-btn"
      onClick={onClick}
      className="theme-toggle"
      title="Import / Export Progress"
      aria-label="Open data transfer panel"
    >
      <ArrowUpDown
        className="w-5 h-5"
        style={{ color: "var(--color-text-muted)" }}
      />
    </button>
  );
}
