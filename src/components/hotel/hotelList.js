import React from "react";
import DBHotels from "../../resources/db.json"
import HotelItem from "./hotelItem";

class hotelList extends React.Component {
    render() {
        return (
            <div className="mt-3">
                {
                    DBHotels.hotels.map((hotel, index) => {
                        return (
                            <HotelItem key={index} dataHotel={hotel} />
                        );
                    })
                }
            </div>
        );
    }
}

export default hotelList;