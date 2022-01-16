/*
  Warnings:

  - You are about to drop the column `has_donations` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `max_attendence` on the `Booking` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('NONE', 'DONATION', 'SERVICE');

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "has_donations",
DROP COLUMN "max_attendence",
ADD COLUMN     "max_attendees" INTEGER,
ADD COLUMN     "payment_type" "PaymentType" NOT NULL DEFAULT E'NONE';
