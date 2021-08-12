CREATE DATABASE IF NOT EXISTS yelp;

CREATE TABLE IF NOT EXISTS restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 AND price_range <= 5)
);

CREATE TABLE IF NOT EXISTS reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    rating INT NOT NULL check(rating >= 1 AND rating <= 5),
    review TEXT NOT NULL,
    restaurant_id BIGINT NOT NULL,
    CONSTRAINT fk_restaurant
        FOREIGN KEY(restaurant_id)
            REFERENCES restaurants(id)
);
