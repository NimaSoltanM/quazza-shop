import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { formatPrice } from '@/lib/utils';
import { DataTable } from '@/components/ui/data-table';
import { customerColumns } from '@/components/data-table-cols/admin/customer-cols';

interface PageProps {
  params: { category: string };
  searchParams?: {
    query?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const customers = await db.user.findMany();

  const modifiedCustomersPromises = customers.map(async (user) => {
    const orderCount = await db.order.count({ where: { userId: user.id } });
    const totalSpent = await db.order.aggregate({
      _sum: { total: true },
      where: { userId: user.id },
    });

    return {
      name: user.name ?? null,
      email: user.email ?? null,
      orderCount,
      totalSpent: formatPrice(totalSpent._sum.total ?? 0),
      dataJoined: user.emailVerified?.toDateString() ?? null,
    };
  });

  const modifiedCustomers = await Promise.all(modifiedCustomersPromises);

  return <DataTable columns={customerColumns} data={modifiedCustomers} />;
}
