import React from "react";

const restaurantItem = (restaurant) => {
    const { id, name, img, detail } = restaurant
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={img} className="img-fluid" />
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

export default restaurantItem;

