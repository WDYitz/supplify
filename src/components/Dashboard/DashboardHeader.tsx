import { Button } from "../ui/button";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between mb-5 w-full">
      <div className="flex flex-col">
        <h2 className="text-2xl">Dashboard</h2>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="dashed" className="px-4 py-2">
          Criar estoque
        </Button>
      </div>
    </div>
  );
}

export default DashboardHeader;