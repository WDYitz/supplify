import { ProductsTable } from "@/components/ProductsTable";
import { productsColumns } from "@/components/ProductsTable/ProductsColumns";
import { productsMock } from "@/mocks/product";
import ProductDoesNotExist from "../ProductDoesNotExist";


const StockTable = () => {
  if (productsMock.length <= 0) {
    return <ProductDoesNotExist />
  }

  return <ProductsTable columns={productsColumns} data={productsMock} />
}

export default StockTable