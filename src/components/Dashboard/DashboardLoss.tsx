import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

const DashboardLoss = () => {
  return (
    <div className="bg-[#161716] w-full h-full flex justify-between items-center px-4 py-2 rounded-lg">
      <div className="flex items-center gap-6">
        <Image src="/icons/decrease.png" width={35} height={35} alt="loss icon" />
        <span className="text-[#C84343] text-2xl">-{formatCurrency(0)}</span>
      </div>
      <p>Total produtos vencidos</p>
    </div>
  );
}

export default DashboardLoss;