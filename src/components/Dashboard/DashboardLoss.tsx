import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const DashboardLoss = () => {
  return (
    <div className="bg-[#161716] w-full h-[220px] flex flex-col px-8 py-8 space-y-4 rounded-lg justify-center items-end">
      <Button variant="dashed" asChild>
        <Link href="/stock" className="flex gap-2 text-center">
          Ver Mais
          <ArrowUpRightIcon size={30} />
        </Link>
      </Button>
      <div className="flex flex-col space-y-2 h-full justify-end w-full">
        <Image src="/icons/decrease.png" width={35} height={35} alt="loss icon" />
        <span className="text-2xl">Valor Produtos vencidos</span>
        <span className="text-[#C84343] text-4xl text-left">- {formatCurrency(0)}</span>
      </div>
    </div>
  );
}

export default DashboardLoss;