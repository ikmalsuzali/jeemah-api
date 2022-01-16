/*
  Warnings:

  - The values [ALL] on the enum `ViewType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `ProjectFinancialDetails` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[payment_id]` on the table `Receipt` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `project_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('CANCELLED', 'PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'IPAY88');

-- AlterEnum
BEGIN;
CREATE TYPE "ViewType_new" AS ENUM ('FOLLOWERS_PUBLIC', 'FOLLOWERS_PRIVATE', 'INTERNAL_PUBLIC', 'INTERNAL_PRIVATE', 'PUBLIC');
ALTER TABLE "Booking" ALTER COLUMN "booking_view_type" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "post_view_type" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "post_view_type" TYPE "ViewType_new" USING ("post_view_type"::text::"ViewType_new");
ALTER TABLE "Booking" ALTER COLUMN "booking_view_type" TYPE "ViewType_new" USING ("booking_view_type"::text::"ViewType_new");
ALTER TYPE "ViewType" RENAME TO "ViewType_old";
ALTER TYPE "ViewType_new" RENAME TO "ViewType";
DROP TYPE "ViewType_old";
ALTER TABLE "Booking" ALTER COLUMN "booking_view_type" SET DEFAULT 'PUBLIC';
ALTER TABLE "Post" ALTER COLUMN "post_view_type" SET DEFAULT 'PUBLIC';
COMMIT;

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_financial_detail_id_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "event_id" TEXT,
ALTER COLUMN "booking_view_type" SET DEFAULT E'PUBLIC';

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "payment_method" "PaymentMethod",
ADD COLUMN     "payment_status" "PaymentStatus" NOT NULL DEFAULT E'PENDING',
ADD COLUMN     "phone_number" TEXT,
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "response_status" INTEGER,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "post_view_type" SET DEFAULT E'PUBLIC';

-- AlterTable
ALTER TABLE "Receipt" ADD COLUMN     "payment_id" TEXT,
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "reference_no" TEXT,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProjectFinancialDetails";

-- CreateTable
CREATE TABLE "PaymentItem" (
    "id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "PaymentItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectFinancialDetail" (
    "id" TEXT NOT NULL,
    "bank_account" TEXT,
    "ipay88_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "ProjectFinancialDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_payment_id_unique" ON "Receipt"("payment_id");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_financial_detail_id_fkey" FOREIGN KEY ("financial_detail_id") REFERENCES "ProjectFinancialDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentItem" ADD CONSTRAINT "PaymentItem_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
