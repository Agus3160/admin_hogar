-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_sectionId_fkey";

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
