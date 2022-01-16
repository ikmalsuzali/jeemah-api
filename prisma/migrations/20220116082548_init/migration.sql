/*
  Warnings:

  - You are about to drop the column `address_id` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[project_id]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_address_id_fkey";

-- DropIndex
DROP INDEX "Project_address_id_key";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "project_id" TEXT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "address_id";

-- CreateIndex
CREATE UNIQUE INDEX "Address_project_id_unique" ON "Address"("project_id");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
