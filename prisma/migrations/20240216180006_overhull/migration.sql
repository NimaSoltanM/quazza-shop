-- CreateTable
CREATE TABLE "UserDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UserDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userDetailsId" TEXT,
    CONSTRAINT "Address_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "orderedAt" DATETIME NOT NULL,
    "shippedAt" DATETIME,
    "deliveredAt" DATETIME,
    "status" TEXT NOT NULL,
    "userDetailsId" TEXT,
    CONSTRAINT "Order_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderId" TEXT,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "userDetailsId" TEXT,
    CONSTRAINT "Wishlist_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WishlistItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "addedAt" DATETIME NOT NULL,
    "wishlistId" TEXT,
    CONSTRAINT "WishlistItem_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "username" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "userDetailsId" TEXT,
    CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("comment", "createdAt", "dislikes", "id", "likes", "productId", "rating", "userId", "username") SELECT "comment", "createdAt", "dislikes", "id", "likes", "productId", "rating", "userId", "username" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE TABLE "new_Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userDetailsId" TEXT,
    CONSTRAINT "Cart_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cart" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
