import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

const DashboardIncome = () => {
  return (
    <div className="bg-[#161716] w-full h-full flex justify-between items-center px-4 py-2 rounded-lg">
      <div className="flex items-center space-x-4">
        <Image src="/icons/increase.png" width={40} height={40} alt="income icon" />
        <span className="text-[#2DD765] text-3xl">{formatCurrency(0)}</span>
      </div>
      <p>Total</p>
    </div>
  );
}

export default DashboardIncome;