const Restaurant = ({ restaurant }) => (
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
            >
                Delete
            </button>
        </td>

    </tr>
);

export default Restaurant;
