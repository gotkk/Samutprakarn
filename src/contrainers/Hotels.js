import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Hotel from "../components/hotel/hotel";
import HotelList from "../components/hotel/hotelList";

class Hotels extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container mt-2 pt-5">
                    <HotelList />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Hotels;