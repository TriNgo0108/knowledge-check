import { useCallback } from "react";
import { toast } from "sonner";
import { Download, ChevronRight } from "lucide-react";
import { useQuizProgressStore } from "@store/quizProgressStore";

export function ExportCard() {
  const exportProgress = useQuizProgressStore((s) => s.exportProgress);
  const hasProgress =
    Object.keys(useQuizProgressStore((s) => s.progressByKey)).length > 0;

  const handleExport = useCallback(async () => {
    const result = await exportProgress();
    if (result.saved) {
      toast.success("Progress exported as .json!");
    }
  }, [exportProgress]);

  return (
    <button
      id="export-progress-btn"
      onClick={handleExport}
      disabled={!hasProgress}
      className="export-action-card group w-full text-left rounded-xl p-5 transition-all duration-300"
      style={{
        background: "var(--color-bg-elevated)",
        border: "1px solid var(--color-border)",
        cursor: hasProgress ? "pointer" : "not-allowed",
        opacity: hasProgress ? 1 : 0.45,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background:
              "linear-gradient(135deg, hsl(174, 72%, 46%) 0%, hsl(186, 90%, 50%) 100%)",
            boxShadow: "0 4px 14px hsla(174, 72%, 46%, 0.3)",
          }}
        >
          <Download className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex-1">
          <h4
            className="font-semibold text-base mb-0.5"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
            }}
          >
            Export Progress
          </h4>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Download as{" "}
            <code
              className="px-1.5 py-0.5 rounded text-xs"
              style={{
                background: "var(--color-bg-hover)",
                color: "var(--color-brand)",
              }}
            >
              .json
            </code>
          </p>
        </div>
        <ChevronRight
          className="w-5 h-5 mt-1 opacity-40 transition-opacity group-hover:opacity-80"
          style={{ color: "var(--color-text-muted)" }}
        />
      </div>
    </button>
  );
}
