import { mockedProducts } from "@/mocks/products";
import { ProductsForm } from "@/components/Forms/Products";

const StockHeader =  () => {
  return (
    <div className="flex justify-between mb-5 w-full">
      <div className="flex flex-col">
        <h2 className="text-2xl">Estoque</h2>
      </div>
      <div className="flex flex-col gap-2">
        {mockedProducts && <ProductsForm />}
      </div>
    </div>
  );
}

export default StockHeader;