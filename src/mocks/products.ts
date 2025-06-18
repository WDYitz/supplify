import { IProductMock, ProductClassification } from "@/types/product.type";
import { faker } from "@faker-js/faker";

export const mockedProducts = Array.from({ length: 100 }).map(
  (): IProductMock => {
    return {
      name: faker.commerce.productName(),
      id: faker.string.uuid(),
      qtyInStock: faker.number.int({ min: 0, max: 250 }),
      productCode: faker.commerce.productAdjective(),
      barcode: faker.string.numeric({
        length: 13,
        exclude: ["2", "3", "4", "5", "6", "7", "8", "9"],
      }),
      tag: faker.commerce.productMaterial(),
      expirationDate: faker.date.future({ years: 2 }), // 2 ano a partir de agora
      unitPrice: Number(faker.commerce.price({ min: 1, max: 100, symbol: "R$" })),
      classification: (
        Object.values(ProductClassification) as ProductClassification[]
      )[
        Math.floor(Math.random() * Object.values(ProductClassification).length)
      ],
      createdAt: faker.date.past({ years: 1 }),
      updatedAt: new Date(),
      stockId: null,
    };
  }
);
