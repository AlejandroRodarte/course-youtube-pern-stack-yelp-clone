import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = ({
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

    const onSubmitButtonClick = useCallback((review) => onSubmit(review), [onSubmit]);

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

        review: {
            required: 'Please input a review.',
            minLength: {
                value: 1,
                message: 'Input a name longer than 1 character.'
            }
        }

    };

    const nameInputCssClasses = `form-control ${ formState.errors.name ? 'border-danger' : '' }`;
    const reviewInputCssClasses = `form-control ${ formState.errors.review ? 'border-danger' : '' }`;

    return (
        <div
            className="mb-2 mx-4"
        >
            <form
                onSubmit={ handleSubmit(onSubmitButtonClick) }
            >
                <div
                    className="row"
                >
                    <div
                        className="form-group col-8"
                    >
                        <label
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className={ nameInputCssClasses }
                            placeholder="name"
                            { ...register('name', validations.name) }
                        />
                        <label
                            className="text-danger"
                        >
                            { formState.errors.name?.message }
                        </label>
                    </div>
                    <div
                        className="form-group col-4"
                    >
                        <label
                            htmlFor="rating"
                        >
                            Rating
                        </label>
                        <select
                            className="form-select"
                            id="rating"
                            { ...register('rating') }
                        >
                            <option disabled></option>
                            {
                                Array.from(Array(5).keys()).map((value, index) => (
                                    <option
                                        key={ value }
                                        value={ value + 1 }
                                    >
                                        { `${value + 1} star${value === 0 ? '' : 's'}` }
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div
                        className="form-group"
                    >
                        <label
                            htmlFor="review"
                        >
                            Review
                        </label>
                        <textarea
                            id="review"
                            className={ reviewInputCssClasses }
                            { ...register('review', validations.review) }
                        >
                        </textarea>
                        <label
                            className="text-danger"
                        >
                            { formState.errors.review?.message }
                        </label>
                    </div>
                    <button
                        className="btn btn-primary"
                    >
                        { submitButtonLabel }
                    </button>
                </div>
            </form>
        </div>
    );

};

export default ReviewForm;
