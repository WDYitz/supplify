
const DashboardDescriptionsAndTags = () => {
  return (
    <div className="bg-[#1a191e] rounded-md flex flex-col justify-start w-[40%] h-full px-8 py-8 space-y-8">
      <div className="space-y-4">
        <p className="text-xl font-extralight">Descrição</p>
        <p className="text-xl font-medium w-full">{"Estoque de alimentos do supermercado Supplify, Produtos como milho, soja, refrigerantes e outros."}</p>
      </div>
      <div className="space-y-4 space-x-2">
        <p className="text-2xl font-extralight">Tags</p>
        <div className="flex flex-wrap gap-2">
          ...
        </div>
      </div>
    </div>
  );
}

export default DashboardDescriptionsAndTags;