import { useCallback } from 'react';

const Restaurant = ({
    restaurant,
    onDeleteRestaurant
}) => {

    const deleteRestaurant = useCallback(() => onDeleteRestaurant(restaurant.id), [onDeleteRestaurant, restaurant.id]);

    return (
        <tr>
    
            <td>
                { restaurant.name }
            </td>
            
            <td>
                { restaurant.location }
            </td>
            
            <td>
                { '$'.repeat(restaurant.price_range) }
            </td>
            
            <td>Rating</td>
    
            <td>
                <button
                    className="btn btn-warning"
                >
                    Update
                </button>
            </td>
    
            <td>
                <button
                    className="btn btn-danger"
                    onClick={ deleteRestaurant }
                >
                    Delete
                </button>
            </td>
    
        </tr>
    );

};

export default Restaurant;
