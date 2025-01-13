import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { LoginLeftSide } from "./_components/left-side";
import { LoginRightSide } from "./_components/right-side";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) redirect("/");

  return (
    <div className="grid h-full grid-cols-2 bg-[#030303]">
      <LoginLeftSide />
      <LoginRightSide />
    </div >
  );
};

export default LoginPage;