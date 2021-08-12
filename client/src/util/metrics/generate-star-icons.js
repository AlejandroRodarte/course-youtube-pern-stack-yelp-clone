const generateStarIcons = (rating) => {

    const starIcons = [...Array(5)].map((_, index) => ({
        key: index,
        name: 'fas fa-star'
    }));

    let switched = false;

    for (let i = 0; i < 5; i++) {

        if (switched) {
            starIcons[i].name = 'far fa-star';
            continue;
        };

        const difference = rating - (i + 1);

        const isDifferenceNegative = difference < 0;
        const isDifferenceZero = difference === 0;

        if (isDifferenceNegative || isDifferenceZero) switched = true;
        if (isDifferenceNegative) starIcons[i].name = 'fas fa-star-half-alt';

    }

    return starIcons;

};

export default generateStarIcons;