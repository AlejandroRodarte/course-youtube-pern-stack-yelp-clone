import StarRating from './../../../ui/metrics/StarRating';

const ReviewCard = () => (
    <div
        className="card text-white bg-primary mb-3 mx-2"
        style={{ maxWidth: '30%' }}
    >
        <div
            className="card-header d-flex justify-content-between"
        >
            <span>
                Joan
            </span>

            <span>
                <StarRating
                    rating={ 3.5 }
                />
            </span>
        </div>
        <div
            className="card-body"
        >
            <p
                className="card-text"
            >
                This restaurant is awesome.
            </p>
        </div>
    </div>
);

export default ReviewCard;
