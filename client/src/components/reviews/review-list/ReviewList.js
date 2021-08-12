import ReviewCard from "./children/ReviewCard";

const ReviewList = () => (
    <div
        className="row row-cols-3 mb-2"
    >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
    </div>
);

export default ReviewList;