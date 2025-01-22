/*
  Warnings:

  - Changed the type of `qty_in_stock` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "qty_in_stock",
ADD COLUMN     "qty_in_stock" INTEGER NOT NULL;
