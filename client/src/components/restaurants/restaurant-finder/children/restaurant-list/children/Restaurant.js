import { useCallback } from 'react';

import StarRating from './../../../../../ui/metrics/StarRating';

const Restaurant = ({
    restaurant,
    onDeleteButtonClick,
    onEditButtonClick,
    onRecordClick
}) => {

    const onClick = useCallback(() => onRecordClick(restaurant.id), [onRecordClick, restaurant.id]);
    
    const deleteButtonClick = useCallback((e) => {
        e.stopPropagation();
        onDeleteButtonClick(restaurant.id);
    }, [onDeleteButtonClick, restaurant.id]);

    const editButtonClick = useCallback((e) => {
        e.stopPropagation();
        onEditButtonClick(restaurant.id);
    }, [onEditButtonClick, restaurant.id]);

    return (
        <tr
            onClick={ onClick }
        >
    
            <td>
                { restaurant.name }
            </td>
            
            <td>
                { restaurant.location }
            </td>
            
            <td>
                { '$'.repeat(restaurant.price_range) }
            </td>
            
            <td>
                {
                    +restaurant.review_count === 0 ?
                    (
                        <span
                            className="text-warning"
                        >
                            No reviews
                        </span>
                    ) :
                    (
                        <>
                            <StarRating
                                rating={ restaurant.average_rating }
                            />
                            <span
                                className="mx-2 text-warning"
                            >
                                ({ restaurant.review_count})
                            </span>
                        </>
                    )
                }
            </td>
    
            <td>
                <button
                    className="btn btn-warning"
                    onClick={ editButtonClick }
                >
                    Update
                </button>
            </td>
    
            <td>
                <button
                    className="btn btn-danger"
                    onClick={ deleteButtonClick }
                >
                    Delete
                </button>
            </td>
    
        </tr>
    );

};

export default Restaurant;
