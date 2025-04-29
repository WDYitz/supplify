import { getMockData } from "@/actions/get-mock-data";
import { ProductsTable } from "@/components/ProductsTable";
import { productsColumns } from "@/components/ProductsTable/ProductsColumns";
import ProductDoesNotExist from "../ProductDoesNotExist";

const StockTable = async () => {
  const productsMock = await getMockData()

  if (productsMock.length <= 0) {
    return <ProductDoesNotExist />
  }

  return <ProductsTable columns={productsColumns} data={productsMock} />
}

export default StockTable