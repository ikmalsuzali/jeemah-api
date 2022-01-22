/*
  Warnings:

  - Added the required column `name` to the `Currency` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AcceptanceStatus" AS ENUM ('CONFIRMED', 'PENDING', 'DECLINED');

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_project_id_fkey";

-- AlterTable
ALTER TABLE "Currency" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserProjectFollower" ADD COLUMN     "acceptance_status" "AcceptanceStatus" NOT NULL DEFAULT E'CONFIRMED';

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Address_project_id_unique" RENAME TO "Address_project_id_key";

-- RenameIndex
ALTER INDEX "EventRate_event_id_unique" RENAME TO "EventRate_event_id_key";

-- RenameIndex
ALTER INDEX "Project_financial_detail_id_unique" RENAME TO "Project_financial_detail_id_key";

-- RenameIndex
ALTER INDEX "Receipt_payment_id_unique" RENAME TO "Receipt_payment_id_key";
