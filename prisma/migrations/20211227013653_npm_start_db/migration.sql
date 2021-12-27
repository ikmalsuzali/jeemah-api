-- AlterTable
ALTER TABLE "Country" ALTER COLUMN "created_by" DROP NOT NULL,
ALTER COLUMN "updated_by" DROP NOT NULL;

-- RenameIndex
ALTER INDEX "Address_city_id_key" RENAME TO "Address_city_id_unique";
