import React from "react";
import DBTravels from "../../resources/db.json"
import TravelItem from "./travelItem";

class travelList extends React.Component {
    render() {
        return (
            <div className="mt-3">
                {DBTravels.travels.map((travel) => TravelItem(travel))}
            </div>
        );
    }
}

export default travelList;
