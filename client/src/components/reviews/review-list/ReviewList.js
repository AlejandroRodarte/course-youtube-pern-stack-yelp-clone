import ReviewCard from './children/ReviewCard';

const ReviewList = ({ reviews }) => (
    <div
        className="row row-cols-3 mb-2"
    >
        {
            reviews.map(
                (review) => 
                    <ReviewCard
                        key={ review.id }
                        review={ review }
                    />
            )
        }
    </div>
);

export default ReviewList;