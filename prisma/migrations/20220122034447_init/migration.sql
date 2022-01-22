/*
  Warnings:

  - You are about to drop the column `event_id` on the `EventRate` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[event_rate_id]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `PostCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "OrganizationPersonType" AS ENUM ('CHAIRMAN', 'VICE_CHAIRMAN', 'TREASURER', 'SECRETARY', 'COMMITTEE_MEMBER');

-- DropForeignKey
ALTER TABLE "EventRate" DROP CONSTRAINT "EventRate_event_id_fkey";

-- DropIndex
DROP INDEX "EventRate_event_id_key";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "event_rate_id" TEXT;

-- AlterTable
ALTER TABLE "EventRate" DROP COLUMN "event_id";

-- AlterTable
ALTER TABLE "OrganizationChartAdmin" ADD COLUMN     "organization_person_type" "OrganizationPersonType" NOT NULL DEFAULT E'COMMITTEE_MEMBER';

-- CreateIndex
CREATE UNIQUE INDEX "Event_event_rate_id_key" ON "Event"("event_rate_id");

-- CreateIndex
CREATE UNIQUE INDEX "PostCategory_name_key" ON "PostCategory"("name");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_event_rate_id_fkey" FOREIGN KEY ("event_rate_id") REFERENCES "EventRate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
