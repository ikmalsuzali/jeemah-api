-- CreateEnum
CREATE TYPE "PostBaseCategory" AS ENUM ('EVENT', 'USEFUL_CONTACT_NO', 'LINKS');

-- CreateEnum
CREATE TYPE "PostViewType" AS ENUM ('FOLLOWERS', 'INTERNAL', 'ALL');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "post_base_category" "PostBaseCategory",
ADD COLUMN     "post_view_type" "PostViewType" NOT NULL DEFAULT E'ALL';
