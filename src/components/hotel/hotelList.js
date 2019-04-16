import React from "react";
import DBHotels from "../../resources/db.json"
import HotelItem from "./hotelItem";

class hotelList extends React.Component {
    render() {
        return (
            <div className="mt-3">
                {DBHotels.hotels.map((data) => HotelItem(data))}
            </div>
        );
    }
}

export default hotelList;