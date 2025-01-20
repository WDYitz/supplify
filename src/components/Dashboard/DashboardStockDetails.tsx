
const DashboardStockDetails = () => {
  const date = new Date();
  const dateNow = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="bg-[#161716] rounded-md flex items-center justify-between h-[150px] px-8 py-2">
      <div className="space-y-4">
        <p className="text-2xl font-extralight">Título</p>
        <p className="text-xl font-medium">{"Supermercado Supplify"}</p>
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-extralight">Usuário</p>
        <p className="text-xl font-medium">{"Supplify User"}</p>
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-extralight">Criado em</p>
        <p className="text-xl font-medium">{dateNow}</p>
      </div>
    </div>
  );
}

export default DashboardStockDetails;