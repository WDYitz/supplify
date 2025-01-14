import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface SkeletonButtonLoadingProps {
  variants?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}

const SkeletonButtonLoading = ({ variants }: SkeletonButtonLoadingProps) => {
  return (
    <Button
      variant={variants}
      className={"animate-pulse  shadow-sm hover:bg-accent hover:text-accent-foreground"}
      disabled
    >
      <Loader2 className="animate-spin text-white" />
    </Button>
  );
};

export default SkeletonButtonLoading;