/*
  Warnings:

  - You are about to drop the column `email` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `reference_no` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "phone_number",
ADD COLUMN     "reference_no" TEXT NOT NULL,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
