import type { PropsWithChildren } from "react"

const DashboardExpiredProducts = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-md mb-4">Produtos vencidos há 7 Dias</p>
      {children}
    </div>
  )
}

export default DashboardExpiredProducts;