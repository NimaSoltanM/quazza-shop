/*
  Warnings:

  - You are about to drop the column `orderedAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shippedAt` on the `Order` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "deliveredAt" DATETIME,
    "status" TEXT NOT NULL,
    "userDetailsId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Order_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("deliveredAt", "id", "status", "total", "userDetailsId", "userId") SELECT "deliveredAt", "id", "status", "total", "userDetailsId", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
