/*
  Warnings:

  - You are about to drop the `BookingAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BookingImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "BookingRepeatType" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "BookingDays" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "AttachmentType" AS ENUM ('IMAGE', 'FILE');

-- DropForeignKey
ALTER TABLE "BookingAttachment" DROP CONSTRAINT "BookingAttachment_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "BookingImage" DROP CONSTRAINT "BookingImage_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachment" DROP CONSTRAINT "PostAttachment_post_id_fkey";

-- DropForeignKey
ALTER TABLE "PostImage" DROP CONSTRAINT "PostImage_post_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectImage" DROP CONSTRAINT "ProjectImage_project_id_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "all_day" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "main_booking_id" TEXT;

-- DropTable
DROP TABLE "BookingAttachment";

-- DropTable
DROP TABLE "BookingImage";

-- DropTable
DROP TABLE "PostAttachment";

-- DropTable
DROP TABLE "PostImage";

-- DropTable
DROP TABLE "ProjectImage";

-- CreateTable
CREATE TABLE "Attachment" (
    "id" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "post_attachment_id" TEXT,
    "post_image_id" TEXT,
    "project_logo_id" TEXT,
    "project_image_id" TEXT,
    "booking_image_id" TEXT,
    "booking_attachment_id" TEXT,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);
