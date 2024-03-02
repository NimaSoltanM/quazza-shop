import React from 'react';

interface StarRatingProps {
  ratings: number[];
  className?: string;
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}

const StarRating = ({ ratings, className }: StarRatingProps) => {
  const calculateAverageRating = (ratings: number[]) => {
    if (ratings.length === 0) {
      return 0;
    }

    const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
    return totalRating / ratings.length;
  };

  const averageRating = calculateAverageRating(ratings);

  const fullStars = Math.floor(averageRating);
  const halfStars = Math.round((averageRating - fullStars) * 2);
  const emptyStars = Math.max(0, 5 - fullStars - halfStars);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className='flex items-center gap-0.5'>
        {/* Render full stars */}
        {Array(fullStars).fill(<StarIcon className='w-5 h-5 fill-primary' />)}
        {/* Render half stars */}
        {Array(halfStars).fill(<StarIcon className='w-5 h-5 fill-primary' />)}
        {/* Render empty stars */}
        {Array(emptyStars).fill(
          <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
        )}
      </div>
      <small>{averageRating.toFixed(2)}</small>
    </div>
  );
};

export default StarRating;
