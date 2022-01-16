/*
  Warnings:

  - The values [FOLLOWERS,INTERNAL] on the enum `PostViewType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `has_attendence` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Post` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostViewType_new" AS ENUM ('FOLLOWERS_PUBLIC', 'FOLLOWERS_PRIVATE', 'INTERNAL_PUBLIC', 'INTERNAL_PRIVATE', 'ALL');
ALTER TABLE "Post" ALTER COLUMN "post_view_type" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "post_view_type" TYPE "PostViewType_new" USING ("post_view_type"::text::"PostViewType_new");
ALTER TYPE "PostViewType" RENAME TO "PostViewType_old";
ALTER TYPE "PostViewType_new" RENAME TO "PostViewType";
DROP TYPE "PostViewType_old";
ALTER TABLE "Post" ALTER COLUMN "post_view_type" SET DEFAULT 'ALL';
COMMIT;

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_user_id_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "has_attendence",
DROP COLUMN "user_id";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
