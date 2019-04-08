import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restaurant from "../components/restaurant/restaurant"

class Restaurants extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container mt-2 pt-5">
                    <Restaurant />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Restaurants;