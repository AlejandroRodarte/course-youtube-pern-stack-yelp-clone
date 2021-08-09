import Header from './children/Header';
import AddRestaurantForm from './children/AddRestaurantForm';
import RestaurantList from './children/RestaurantList';

const RestaurantFinder = () => (
    <div>
        <Header />
        <AddRestaurantForm />
        <RestaurantList />
    </div>
);

export default RestaurantFinder;
