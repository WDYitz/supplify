import type { ClassificationType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

interface IProductMock {
  name: string;
  id: number;
  qtyInStock: number;
  productCode: string;
  barcode: number;
  tag: string;
  expirationDate: Date;
  unitPrice: Decimal;
  classification: ClassificationType;
  createdAt: Date;
  updatedAt: Date;
  stockId: number | null;
}

export const productsMock: IProductMock[] = [
  {
    name: 'Produto 1',
    productCode: 'y24g24',
    id: 1,
    qtyInStock: 26,
    barcode: 0,
    tag: "Licor",
    expirationDate: new Date(),
    unitPrice: new Decimal(10.5),
    classification: "C",
    createdAt: new Date(),
    updatedAt: new Date(),
    stockId: 1
  },
  {
    name: 'Produto 2',
    productCode: 'g24yy2',
    id: 2,
    qtyInStock: 23,
    barcode: 0,
    tag: "Refrigerante",
    expirationDate: new Date(),
    unitPrice: new Decimal(10.5),
    classification: "A",
    createdAt: new Date(),
    updatedAt: new Date(),
    stockId: 1
  },
  {
    name: 'Produto 3',
    productCode: 'g324g3',
    id: 3,
    qtyInStock: 53,
    barcode: 0,
    tag: "Alimentos Seco",
    expirationDate: new Date(),
    unitPrice: new Decimal(10.5),
    classification: "B",
    createdAt: new Date(),
    updatedAt: new Date(),
    stockId: 1
  },
]