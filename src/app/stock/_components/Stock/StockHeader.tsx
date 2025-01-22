import { ProductsForm } from "@/components/Forms/Products";
import { productsMock } from "@/mocks/product";

const StockHeader = () => {
  return (
    <div className="flex justify-between mb-5 w-full">
      <div className="flex flex-col">
        <h2 className="text-2xl">Estoque</h2>
      </div>
      <div className="flex flex-col gap-2">
        {productsMock && <ProductsForm />}
      </div>
    </div>
  );
}

export default StockHeader;