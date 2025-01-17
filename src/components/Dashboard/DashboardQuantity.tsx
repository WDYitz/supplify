const DashboardQuantity = () => {
  return (
    <div className="bg-[#161716] w-[250px] h-[150px] rounded-md py-2 px-2 flex flex-col justify-between">
      <span className="text-md text-end w-full">QTD</span>
      <div className="px-4 py-2">
        <span className="text-2xl">{0}</span>
        <p className="text-2xl">Em Estoque</p>
      </div>
    </div>
  );
}

export default DashboardQuantity;