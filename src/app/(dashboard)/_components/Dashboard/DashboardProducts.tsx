import type { PropsWithChildren } from "react"

const DashboardProducts = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-md mb-4">Produtos</p>
      {children}
    </div>
  )
}

export default DashboardProducts;