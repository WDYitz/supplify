import type { PropsWithChildren } from "react";
import Logo from "../Logo";

const Root = ({ children }: PropsWithChildren) => {
  return (
    <div className={`w-[90px] overflow-hidden h-full bg-[#161716] flex flex-col items-center justify-between py-4`}>
      <Logo w={50} h={50} />
      {children}
    </div >
  );
}

export default Root;