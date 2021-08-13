import StarRating from './../../../ui/metrics/StarRating';

const ReviewCard = ({ review }) => (
    <div
        className="card text-white bg-primary mb-3 mx-2"
        style={{ maxWidth: '30%' }}
    >
        <div
            className="card-header d-flex justify-content-between"
        >
            <span>
                { review.name }
            </span>

            <span>
                <StarRating
                    rating={ review.rating }
                />
            </span>
        </div>
        <div
            className="card-body"
        >
            <p
                className="card-text"
            >
                { review.review }
            </p>
        </div>
    </div>
);

export default ReviewCard;
