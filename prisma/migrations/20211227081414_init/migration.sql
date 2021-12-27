-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_country_id_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_state_id_fkey";

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "state_id" DROP NOT NULL,
ALTER COLUMN "country_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "State"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
