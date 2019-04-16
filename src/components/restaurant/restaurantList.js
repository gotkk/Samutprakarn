import React from "react";
import DBRestaurants from "../../resources/db.json"
import RestaurantItem from "./restaurantItem";

class restaurantList extends React.Component {
    render() {
        return (
            <div className="mt-3">
                {DBRestaurants.restaurants.map((restaurant) => RestaurantItem(restaurant))}
            </div>
        );
    }
}

export default restaurantList;
