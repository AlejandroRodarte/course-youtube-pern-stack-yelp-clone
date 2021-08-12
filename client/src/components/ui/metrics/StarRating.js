import metrics from '../../../util/metrics';

const StarRating = ({ rating }) => {

    const starIcons = metrics.generateStarIcons(rating);

    return (
        <>
            {
                starIcons.map((icon) => (
                    <i
                        key={ icon.key }
                        className={ `${icon.name} text-warning` }
                    >
                    </i>
                ))
            }
        </>
    );

};

export default StarRating;
