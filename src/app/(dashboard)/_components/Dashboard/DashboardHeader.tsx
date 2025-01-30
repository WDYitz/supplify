import { StockForm } from "@/components/Forms/Stock";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between mb-5 w-full">
      <div className="flex flex-col">
        <h2 className="text-2xl">Dashboard</h2>
      </div>
      <div className="flex flex-col gap-2">
        <StockForm />
      </div>
    </div>
  );
}

export default DashboardHeader;