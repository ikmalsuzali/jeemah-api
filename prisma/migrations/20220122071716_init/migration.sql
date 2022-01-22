/*
  Warnings:

  - Made the column `post_base_category` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_post_category_id_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "post_base_category" SET NOT NULL,
ALTER COLUMN "post_category_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_post_category_id_fkey" FOREIGN KEY ("post_category_id") REFERENCES "PostCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
