import { useMemo } from "react";
import { ArrowUpDown, BarChart3, Info } from "lucide-react";
import { useQuizProgressStore } from "@features/quiz/store/quizProgressStore";
import { ExportCard } from "./ExportCard";
import { ImportCard } from "./ImportCard";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@components/ui/sheet";

export default function ImportExportSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const progressByKey = useQuizProgressStore((s) => s.progressByKey);

  const { hasProgress, topicCount, totalAnswered } = useMemo(() => {
    const keys = Object.keys(progressByKey);
    return {
      hasProgress: keys.length > 0,
      topicCount: new Set(keys.map((k) => k.split("_")[0])).size,
      totalAnswered: Object.values(progressByKey).reduce(
        (sum, p) => sum + Object.keys(p.questions).length,
        0,
      ),
    };
  }, [progressByKey]);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="flex flex-col h-full w-full max-w-md p-0 gap-0"
        style={{
          background: "var(--color-bg-card-solid)",
          borderLeft: "1px solid var(--color-border)",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.25)",
        }}
      >
        <SheetHeader
          className="flex flex-row items-center justify-between px-6 py-5 space-y-0 text-left"
          style={{
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand) 0%, var(--color-secondary) 100%)",
                boxShadow: "0 4px 12px var(--color-brand-glow)",
              }}
            >
              <ArrowUpDown className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="space-y-0.5">
              <SheetTitle
                className="text-lg font-semibold m-0"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                Data Transfer
              </SheetTitle>
              <SheetDescription
                className="text-xs m-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                Import & export your progress
              </SheetDescription>
            </div>
          </div>
          {/* Note: SheetContent includes a close button by default, so we don't need to manually add one here unless we set showCloseButton={false} on SheetContent. We use the default one. */}
        </SheetHeader>

        {/* Content */}
        <div className="flex-1 px-6 py-6 space-y-5 overflow-y-auto">
          {/* Stats */}
          {hasProgress && (
            <div
              className="flex items-center justify-between px-4 py-3 rounded-xl"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-2">
                <BarChart3
                  className="w-4 h-4"
                  style={{ color: "var(--color-brand)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Your Progress
                </span>
              </div>
              <div
                className="flex items-center gap-3 text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                <span>
                  <strong style={{ color: "var(--color-brand)" }}>
                    {topicCount}
                  </strong>{" "}
                  {topicCount === 1 ? "topic" : "topics"}
                </span>
                <span
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "var(--color-border)",
                    display: "inline-block",
                  }}
                />
                <span>
                  <strong style={{ color: "var(--color-brand)" }}>
                    {totalAnswered}
                  </strong>{" "}
                  answers
                </span>
              </div>
            </div>
          )}

          <ExportCard />
          <ImportCard />

          {/* Format note */}
          <div
            className="flex items-start gap-2.5 px-4 py-3 rounded-lg text-xs"
            style={{
              background: "var(--color-bg-hover)",
              color: "var(--color-text-muted)",
            }}
          >
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              Files are saved in <strong>JSON format</strong> with versioned
              schema. Importing merges with your existing progress.
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
