const startFetchRestaurants = () => async (dispatch) => {

    const data = await new Promise((res, rej) => res([
        {
            id: 2,
            name: 'Taco Bell',
            location: 'Montana',
            price_range: 4
        }
    ]));

    return data;

};

const effects = {
    startFetchRestaurants
};

export default effects;
