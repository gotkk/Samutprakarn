import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hotel from "../components/hotel/hotel";

class Hotels extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container mt-2 pt-5">
                    <Hotel />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Hotels;