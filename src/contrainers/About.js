import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/about/about";

class Abouts extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="mt-2 pt-5">
                    <div className="text-center mt-5 mb-5 font-weight-bold title">
                        <h1>Thank You</h1>
                    </div>
                    <hr />
                </div>
                <div>
                    <About />
                </div>
                <div className="fixed-bottom">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Abouts;