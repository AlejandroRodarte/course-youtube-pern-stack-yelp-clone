import { useForm } from 'react-hook-form';

const RestaurantForm = ({
    onSubmit,
    submitButtonLabel
}) => {

    const {
        register,
        handleSubmit,
        formState
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmitButtonClick = (restaurant) => {

        const parsedRestaurant = {
            ...restaurant,
            priceRange: +restaurant.priceRange
        };

        onSubmit(parsedRestaurant);

    };

    const validations = {

        name: {
            required: 'Please input a name.',
            minLength: {
                value: 1,
                message: 'Input a name longer than 1 character.'
            },
            maxLength: {
                value: 50,
                message: 'Input a name shorter than 50 character.'
            }
        },

        location: {
            required: 'Please input a location.',
            minLength: {
                value: 1,
                message: 'Input a name longer than 1 character.'
            },
            maxLength: {
                value: 50,
                message: 'Input a name shorter than 50 characters.'
            }
        }

    };

    const nameInputCssClasses = `form-control ${ formState.errors.name ? 'border-danger' : '' }`;
    const locationInputCssClasses = `form-control ${ formState.errors.location ? 'border-danger' : '' }`;

    return (
        <div
            className="mb-4 text-center"
        >
            <form
                onSubmit={ handleSubmit(onSubmitButtonClick) }
            >
                <div 
                    className="row"
                >
                    <div
                        className="col"
                    >
                        <input
                            type="text"
                            className={ nameInputCssClasses }
                            placeholder="name"
                            { ...register('name', validations.name) }
                        />
                        <label className="text-danger">
                            { formState.errors.name?.message }
                        </label>
                    </div>
                    <div
                        className="col"
                    >
                        <input
                            type="text"
                            className={ locationInputCssClasses }
                            placeholder="location"
                            { ...register('location', validations.location) }
                        />
                        <label className="text-danger">
                            { formState.errors.location?.message }
                        </label>
                    </div>
                    <div
                        className="col"
                    >
                        <select
                            className="form-select my-1 mr-sm-2"
                            { ...register('priceRange') }
                        >
                            <option disabled></option>
                            {
                                Array.from(Array(5).keys()).map((value, index) => (
                                    <option
                                        key={ value }
                                        value={ value + 1 }
                                    >
                                        { '$'.repeat(value + 1) }
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div
                        className="col"
                    >
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={ !formState.isValid }
                        >
                            { submitButtonLabel }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );

};

export default RestaurantForm;
