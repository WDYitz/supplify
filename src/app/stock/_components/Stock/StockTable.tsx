import { ProductsTable } from "@/components/ProductsTable"
import { productsColumns } from "@/components/ProductsTable/ProductsColumns"

const StockTable = () => {
  return <ProductsTable columns={productsColumns} data={[]} />
}

export default StockTable