const AddRestaurantForm = () => (
    <div
        className="mb-4 text-center"
    >
        <form>
            <div 
                className="row"
            >
                <div
                    className="col"
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                    />
                </div>
                <div
                    className="col"
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="location"
                    />
                </div>
                <div
                    className="col"
                >
                    <select
                        className="form-select my-1 mr-sm-2"
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
                    >
                            Add Restaurant
                    </button>
                </div>
            </div>
        </form>
    </div>
);

export default AddRestaurantForm;
