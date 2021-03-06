import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Travel from "../components/travel/travel";
import TravelList from "../components/travel/travelList";

class Travels extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container mt-2 pt-5">
                    <TravelList />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Travels;