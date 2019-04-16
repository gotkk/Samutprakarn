import React from "react";
import Reference from "./references";
import AboutMe from "./aboutMe";

const about = () => {
    return (
        <div className="container mb-5 pb-3">
            <Reference />
            <br />
            <br />
            <AboutMe />
        </div>
    );
}

export default about;