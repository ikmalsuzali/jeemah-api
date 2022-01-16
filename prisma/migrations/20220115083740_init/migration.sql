/*
  Warnings:

  - You are about to drop the column `end_datetime` on the `Booking` table. All the data in the column will be lost.
  - The `post_view_type` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `BookedRoom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomRate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPostAttendence` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[reference_no]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `duration_minute` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ViewType" AS ENUM ('FOLLOWERS_PUBLIC', 'FOLLOWERS_PRIVATE', 'INTERNAL_PUBLIC', 'INTERNAL_PRIVATE', 'ALL');

-- CreateEnum
CREATE TYPE "EventRateType" AS ENUM ('DAILY_PER_USER', 'ONE_OFF_PER_USER', 'ONE_OFF_PER_EVENT');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('PUBLIC', 'PRIVATE', 'INTERNAL');

-- DropForeignKey
ALTER TABLE "BookedRoom" DROP CONSTRAINT "BookedRoom_project_id_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_project_id_fkey";

-- DropForeignKey
ALTER TABLE "RoomRate" DROP CONSTRAINT "RoomRate_project_id_fkey";

-- DropForeignKey
ALTER TABLE "RoomRate" DROP CONSTRAINT "RoomRate_room_id_fkey";

-- DropForeignKey
ALTER TABLE "UserPostAttendence" DROP CONSTRAINT "UserPostAttendence_post_id_fkey";

-- DropForeignKey
ALTER TABLE "UserPostAttendence" DROP CONSTRAINT "UserPostAttendence_user_id_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "end_datetime",
ADD COLUMN     "booking_view_type" "ViewType" NOT NULL DEFAULT E'ALL',
ADD COLUMN     "duration_minute" INTEGER NOT NULL,
ADD COLUMN     "has_donations" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "max_attendence" INTEGER;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "post_view_type",
ADD COLUMN     "post_view_type" "ViewType" NOT NULL DEFAULT E'ALL';

-- AlterTable
ALTER TABLE "PostCategory" ADD COLUMN     "fallback_image" TEXT;

-- DropTable
DROP TABLE "BookedRoom";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "RoomRate";

-- DropTable
DROP TABLE "UserPostAttendence";

-- DropEnum
DROP TYPE "PostViewType";

-- DropEnum
DROP TYPE "RoomRateType";

-- DropEnum
DROP TYPE "RoomType";

-- CreateTable
CREATE TABLE "UserBookingAttendence" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "booking_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "UserBookingAttendence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "minute_duration" INTEGER NOT NULL DEFAULT 30,
    "project_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "rate_amount" INTEGER NOT NULL,
    "event_id" TEXT,
    "event_rate_type" "EventRateType" NOT NULL,
    "project_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "EventRate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventRate_event_id_unique" ON "EventRate"("event_id");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_reference_no_key" ON "Booking"("reference_no");

-- AddForeignKey
ALTER TABLE "UserBookingAttendence" ADD CONSTRAINT "UserBookingAttendence_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookingAttendence" ADD CONSTRAINT "UserBookingAttendence_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRate" ADD CONSTRAINT "EventRate_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRate" ADD CONSTRAINT "EventRate_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
