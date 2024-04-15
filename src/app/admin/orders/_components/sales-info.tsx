import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Progress } from '@/components/ui/progress';
import { formatPrice } from '@/lib/utils';
import { calculateSalesData } from './time-priod-infos';

export default async function SalesInfo() {
  const {
    thisWeekTotal,
    weekPercentChange,
    thisMonthTotal,
    monthPercentChange,
  } = await calculateSalesData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Card x-chunk='dashboard-05-chunk-1'>
        <CardHeader className='pb-2'>
          <CardDescription>This Week</CardDescription>
          <CardTitle className='text-4xl'>
            {formatPrice(thisWeekTotal)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-xs text-muted-foreground'>
            {weekPercentChange.toFixed(2)}% from last week
          </div>
        </CardContent>
        <CardFooter>
          <Progress
            value={weekPercentChange}
            aria-label={`${weekPercentChange.toFixed(2)}%`}
          />
        </CardFooter>
      </Card>
      <Card x-chunk='dashboard-05-chunk-2'>
        <CardHeader className='pb-2'>
          <CardDescription>This Month</CardDescription>
          <CardTitle className='text-4xl'>
            {formatPrice(thisMonthTotal)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-xs text-muted-foreground'>
            +{monthPercentChange.toFixed(2)}% from last month
          </div>
        </CardContent>
        <CardFooter>
          <Progress
            value={monthPercentChange}
            aria-label={`${monthPercentChange.toFixed(2)}%`}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
