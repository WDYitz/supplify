
const DashboardQuantity = () => {
  return (
    <div className="bg-[#1a191e] w-full h-[220px] flex flex-col justify-between px-8 py-8 rounded-lg ">
      <span className="text-2xl w-full text-right">QTD</span>
      <div className="flex flex-col space-y-2 h-full justify-end">
        <span className="text-5xl text-left">{0}</span>
        <span className="text-2xl text-left">Em Estoque</span>
      </div>
    </div>
  );
}

export default DashboardQuantity;