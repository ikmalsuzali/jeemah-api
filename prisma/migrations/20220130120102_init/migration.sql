/*
  Warnings:

  - A unique constraint covering the columns `[project_logo_id]` on the table `Attachment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Attachment_project_logo_id_key" ON "Attachment"("project_logo_id");

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_post_attachment_id_fkey" FOREIGN KEY ("post_attachment_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_post_image_id_fkey" FOREIGN KEY ("post_image_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_project_logo_id_fkey" FOREIGN KEY ("project_logo_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_project_image_id_fkey" FOREIGN KEY ("project_image_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
