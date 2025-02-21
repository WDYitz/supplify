import { ClassificationType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

interface IProductMock {
  name: string;
  id: number;
  qtyInStock: number;
  productCode: string;
  barcode: string;
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
    barcode: '1110110',
    tag: "Licor",
    expirationDate: new Date(),
    unitPrice: new Decimal(10.5),
    classification: ClassificationType.C,
    createdAt: new Date(),
    updatedAt: new Date(),
    stockId: 1
  },
  {
    name: 'Produto 2',
    productCode: 'g24yy2',
    id: 2,
    qtyInStock: 23,
    barcode: '1101110',
    tag: "Refrigerante",
    expirationDate: new Date(),
    unitPrice: new Decimal(10.5),
    classification: ClassificationType.A,
    createdAt: new Date(),
    updatedAt: new Date(),
    stockId: 1
  },
]