export default function NumbersSkeleton() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
      <div className='bg-gray-200 animate-pulse rounded-lg p-4 shadow-md'>
        <div className='h-6 w-24 bg-gray-300 rounded-md'></div>
        <div className='mt-2 h-4 w-full bg-gray-300 rounded-md'></div>
      </div>
    </div>
  );
}
