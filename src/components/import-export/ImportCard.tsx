import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { Upload, ChevronRight } from "lucide-react";
import { useQuizProgressStore } from "@/store/quizProgressStore";

export function ImportCard() {
  const importProgress = useQuizProgressStore((s) => s.importProgress);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        const result = importProgress(content);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      };
      reader.onerror = () => {
        toast.error("Failed to read the file.");
      };
      reader.readAsText(file);
    },
    [importProgress],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/json": [".json"] },
    maxFiles: 1,
    onDrop,
    onDropRejected: () => {
      toast.error("Only .json files are accepted.");
    },
  });

  return (
    <button
      {...getRootProps()}
      id="import-progress-btn"
      className="import-action-card group w-full text-left rounded-xl p-5 transition-all duration-300"
      style={{
        background: isDragActive
          ? "var(--color-brand-glow)"
          : "var(--color-bg-elevated)",
        border: isDragActive
          ? "2px dashed var(--color-brand)"
          : "1px solid var(--color-border)",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background:
              "linear-gradient(135deg, hsl(270, 60%, 55%) 0%, hsl(310, 60%, 50%) 100%)",
            boxShadow: "0 4px 14px hsla(270, 60%, 55%, 0.3)",
          }}
        >
          <Upload className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex-1">
          <h4
            className="font-semibold text-base mb-0.5"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
            }}
          >
            Import Progress
          </h4>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {isDragActive ? "Release to import…" : "Accepts "}
            {!isDragActive && (
              <code
                className="px-1.5 py-0.5 rounded text-xs"
                style={{
                  background: "var(--color-bg-hover)",
                  color: "hsl(270, 60%, 55%)",
                }}
              >
                .json
              </code>
            )}
            {!isDragActive && " — click or drag & drop"}
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
