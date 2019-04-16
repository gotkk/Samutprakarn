import React from "react";

const hotailItem = (hotel) => {
    const { id, name, img, detail1, detail2, detail3 } = hotel
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={img} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{name}</h2>
                    {/* <ul className="list-group">
                        <li className="list-group-item"><p className="title">{detail1}</p></li>
                        <li className="list-group-item"><p className="title">{detail2}</p></li>
                        <li className="list-group-item"><p className="title">{detail3}</p></li>
                    </ul> */}
                    <p className="title"><span className="ml-4"></span>{detail1}</p>
                    <p className="title"><span className="ml-4"></span>{detail2}</p>
                    <p className="title"><span className="ml-4"></span>{detail3}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default hotailItem;

