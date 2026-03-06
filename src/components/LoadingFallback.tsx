import { Loader2 } from "lucide-react";

export default function LoadingFallback() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
    </div>
  );
}
