import React from "react";

const travelItem = (props) => {
    const { id, name, img, detail } = props.dataTravel
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={img} className="img-fluid" alt={"รูปสถานที่ท่องเที่ยวที่ "+id}/>
                </div>
                <div className="col-md-6">
                    <h2>{name}</h2>
                    <p className="title"><span className="ml-4"></span>{detail}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default travelItem;

