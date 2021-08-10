import Restaurant from "./children/Restaurant";

const RestaurantList = ({ restaurants }) => (
    <div
        className="list-group"
    >
        <table 
            className="table table-hover table-dark"
        >
            <thead>
                <tr
                    className="bg-primary"
                >
                    <th 
                        scope="col"
                    >
                        Restaurant
                    </th>
                    <th 
                        scope="col"
                    >
                        Location
                    </th>
                    <th 
                        scope="col"
                    >
                        Price Range
                    </th>
                    <th 
                        scope="col"
                    >
                        Ratings
                    </th>
                    <th 
                        scope="col"
                    >
                        Edit
                    </th>
                    <th 
                        scope="col"
                    >
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    restaurants.map((restaurant) => (
                        <Restaurant 
                            key={ restaurant.id } 
                            restaurant={ restaurant }
                        />
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default RestaurantList;
