/*
  Warnings:

  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tags` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_stockId_fkey";

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "tags" TEXT NOT NULL;

-- DropTable
DROP TABLE "Tags";
