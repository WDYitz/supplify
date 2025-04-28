import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginLeftSide } from "./_components/LoginLeftSide";
import { LoginRightSide } from "./_components/LoginRightSide";

const LoginPage = async () => {
  const session = await auth()
  if (session) redirect("/");

  return (
    <div className="grid grid-cols-1 h-full lg:grid-cols-2 bg-[#030303]">
      <LoginLeftSide />
      <LoginRightSide />
    </div >
  );
};

export default LoginPage;