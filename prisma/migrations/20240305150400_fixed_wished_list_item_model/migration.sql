/*
  Warnings:

  - You are about to drop the column `name` on the `WishlistItem` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `WishlistItem` table. All the data in the column will be lost.
  - Made the column `wishlistId` on table `WishlistItem` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WishlistItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "addedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wishlistId" TEXT NOT NULL,
    CONSTRAINT "WishlistItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WishlistItem_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WishlistItem" ("addedAt", "id", "productId", "wishlistId") SELECT "addedAt", "id", "productId", "wishlistId" FROM "WishlistItem";
DROP TABLE "WishlistItem";
ALTER TABLE "new_WishlistItem" RENAME TO "WishlistItem";
CREATE UNIQUE INDEX "WishlistItem_productId_wishlistId_key" ON "WishlistItem"("productId", "wishlistId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
