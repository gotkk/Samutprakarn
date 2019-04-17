import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slides from "../components/home/Slides";
import Intro from "../components/home/Intro";
import Detail from "../components/home/Detail";

class Home extends React.Component {
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="mt-2 pt-5" style={{height: "100vh"}}>
                    <Slides />
                </div>
                <div className="container mt-5 mb-5">
                    <Intro />
                    <Detail />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;