import { IsAuthenticated } from "@/services/authentication";
import { LoginLeftSide } from "./_components/LoginLeftSide";
import { LoginRightSide } from "./_components/LoginRightSide";

const LoginPage = async () => {
  await IsAuthenticated({ redirectTo: "/" });

  return (
    <div className="grid h-full grid-cols-2 bg-[#030303]">
      <LoginLeftSide />
      <LoginRightSide />
    </div >
  );
};

export default LoginPage;