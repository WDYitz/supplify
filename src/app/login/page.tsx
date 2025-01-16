import { IsAuthenticated } from "@/services/authentication";
import { LoginLeftSide } from "./_components/LoginLeftSide";
import { LoginRightSide } from "./_components/LoginRightSide";

const LoginPage = async () => {
  await IsAuthenticated({ redirectTo: "/" });

  return (
    <div className="grid grid-cols-1 h-full lg:grid-cols-2 bg-[#030303]">
      <LoginLeftSide />
      <LoginRightSide />
    </div >
  );
};

export default LoginPage;