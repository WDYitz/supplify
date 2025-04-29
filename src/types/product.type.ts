import type { Decimal } from "@prisma/client/runtime/library";

export interface IProductMock {
  name: string;
  id: number;
  qtyInStock: number;
  productCode: string;
  barcode: string;
  tag: string;
  expirationDate: Date;
  unitPrice: Decimal;
  classification: "A" | "B" | "C";
  createdAt: Date;
  updatedAt: Date;
  stockId: number | null;
}