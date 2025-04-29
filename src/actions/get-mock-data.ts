import type { IProductMock } from "@/types/product.type";

export const getMockData = async () => {
  const mockData = await fetch("http://localhost:3000/mocks/products.json");
  const data: IProductMock[] = await mockData.json();

  return data;
}