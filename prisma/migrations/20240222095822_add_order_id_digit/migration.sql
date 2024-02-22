/*
  Warnings:

  - You are about to drop the column `orderId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `digitId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "digitId" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "deliveredAt" DATETIME,
    "status" TEXT NOT NULL,
    "userDetailsId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Order_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "deliveredAt", "id", "status", "total", "userDetailsId", "userId") SELECT "createdAt", "deliveredAt", "id", "status", "total", "userDetailsId", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
