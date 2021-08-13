import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

const RestaurantForm = ({
    onSubmit,
    submitButtonLabel,
    restaurant
}) => {

    const {
        register,
        handleSubmit,
        formState
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmitButtonClick = useCallback((restaurant) => {

        const parsedRestaurant = {
            ...restaurant,
            priceRange: +restaurant.priceRange
        };

        onSubmit(parsedRestaurant);

    }, [onSubmit]);

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
                            defaultValue={ restaurant ? restaurant.name : '' }
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
                            defaultValue={ restaurant ? restaurant.location : '' }
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
                            defaultValue={ restaurant ? restaurant.price_range : 1 }
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
