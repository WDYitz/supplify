import { Loader2 } from "lucide-react";

const LoadingLoginPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader2 className="animate-spin" />
    </div>
  );
}

export default LoadingLoginPage;