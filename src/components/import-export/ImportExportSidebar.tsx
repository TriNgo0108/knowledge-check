import { useMemo } from "react";
import { Drawer } from "vaul";
import { ArrowUpDown, X, BarChart3, Info } from "lucide-react";
import { useQuizProgressStore } from "@store/quizProgressStore";
import { ExportCard } from "./ExportCard";
import { ImportCard } from "./ImportCard";

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
    <Drawer.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      direction="right"
    >
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 z-[90]"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />

        <Drawer.Content
          className="fixed top-0 right-0 z-[100] h-full w-full max-w-md focus:outline-none"
          style={
            { "--initial-transform": "translateX(100%)" } as React.CSSProperties
          }
        >
          <div
            className="h-full flex flex-col overflow-y-auto"
            style={{
              background: "var(--color-bg-card-solid)",
              borderLeft: "1px solid var(--color-border)",
              boxShadow: "-8px 0 30px rgba(0,0,0,0.25)",
            }}
          >
            {/* Header — slides down */}
            <div
              className="flex items-center justify-between px-6 py-5 animate-slideDown"
              style={{
                borderBottom: "1px solid var(--color-border)",
                animationDelay: "0.05s",
                animationDuration: "0.35s",
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
                  <ArrowUpDown
                    className="w-4 h-4 text-white"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <Drawer.Title
                    className="text-lg font-semibold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-text)",
                    }}
                  >
                    Data Transfer
                  </Drawer.Title>
                  <Drawer.Description
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Import & export your progress
                  </Drawer.Description>
                </div>
              </div>

              <Drawer.Close asChild>
                <button
                  className="theme-toggle w-9 h-9"
                  aria-label="Close panel"
                >
                  <X
                    className="w-5 h-5"
                    style={{ color: "var(--color-text-muted)" }}
                  />
                </button>
              </Drawer.Close>
            </div>

            {/* Content — staggered entrance */}
            <div className="flex-1 px-6 py-6 space-y-5">
              {/* Stats */}
              {hasProgress && (
                <div
                  className="flex items-center justify-between px-4 py-3 rounded-xl animate-fadeIn"
                  style={{
                    background: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    animationDelay: "0.1s",
                    animationDuration: "0.35s",
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

              <div
                className="animate-fadeIn"
                style={{ animationDelay: "0.15s", animationDuration: "0.35s" }}
              >
                <ExportCard />
              </div>
              <div
                className="animate-fadeIn"
                style={{ animationDelay: "0.22s", animationDuration: "0.35s" }}
              >
                <ImportCard />
              </div>

              {/* Format note */}
              <div
                className="flex items-start gap-2.5 px-4 py-3 rounded-lg text-xs animate-fadeIn"
                style={{
                  background: "var(--color-bg-hover)",
                  color: "var(--color-text-muted)",
                  animationDelay: "0.3s",
                  animationDuration: "0.35s",
                }}
              >
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Files are saved in <strong>JSON format</strong> with versioned
                  schema. Importing merges with your existing progress.
                </span>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
