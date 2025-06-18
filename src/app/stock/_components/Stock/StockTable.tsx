import { mockedProducts } from "@/mocks/products";
import { ProductsTable } from "@/components/ProductsTable";
import { productsColumns } from "@/components/ProductsTable/ProductsColumns";
import ProductDoesNotExist from "../ProductDoesNotExist";
import { Decimal } from "@prisma/client/runtime/library";

const StockTable = async () => {

  if (mockedProducts.length <= 0) {
    return <ProductDoesNotExist />
  }

  // Ensure unitPrice is always a Decimal
  const normalizedProducts = mockedProducts.map(product => ({
    ...product,
    unitPrice: typeof product.unitPrice === "number"
      ? new Decimal(product.unitPrice)
      : product.unitPrice
  }));

  return (
    <ProductsTable
      columns={productsColumns}
      data={normalizedProducts}
    />
  )
}

export default StockTable