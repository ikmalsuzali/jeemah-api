-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_booking_image_id_fkey" FOREIGN KEY ("booking_image_id") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_booking_attachment_id_fkey" FOREIGN KEY ("booking_attachment_id") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;
