
export enum ProductClassification {
  A = "A",
  B = "B",
  C = "C",
}

export interface IProductMock {
  name: string;
  id: string;
  qtyInStock: number;
  productCode: string;
  barcode: string;
  tag: string;
  expirationDate: Date;
  unitPrice: number;
  classification: ProductClassification;
  createdAt: Date;
  updatedAt: Date;
  stockId: number | null;
}