import Navbar from '@/components/layout/navbar';
import { getCurrentUserId } from '@/lib/auth';
import { db } from '@/lib/db';

export default async function Page() {
  const userId = await getCurrentUserId();

  const userCarts = await db.cart.findMany({
    where: { userId: userId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <>
      <Navbar />
      <div>
        {userCarts.map((cart) => (
          <div key={cart.id}>
            <h2>Cart ID: {cart.id}</h2>
            <ul>
              {cart.items.map((item) => (
                <ul key={item.id}>
                  <li>Item ID: {item.id}</li>
                  <li>Item Quantity: {item.quantity}</li>
                  <li>Item Name: {item.product.name}</li>
                </ul>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
