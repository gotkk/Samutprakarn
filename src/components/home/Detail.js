import React from "react";

const Detail = () => {
    return (
        <div className="row">
            <div className="col-md-3 mb-2">
                <div className="card" >
                    <img src="/Samutprakarn/images/detail/d1.png" className="img-thumbnail" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center title">ตราประจำจังหวัด<br />สมุทรปราการ</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-2">
                <div className="card" >
                    <img src="/Samutprakarn/images/detail/d2.png" className="img-thumbnail" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center title">ต้นไม้ประจำจังหวัด<br />ต้นโพทะเล </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-2">
                <div className="card" >
                    <img src="/Samutprakarn/images/detail/d3.png" className="img-thumbnail" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center title">ดอกไม้ประจำจังหวัด<br/>ดอกดาวเรือง </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-2">
                <div className="card" >
                    <img src="/Samutprakarn/images/detail/d4.png" className="img-thumbnail" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center title">สัตว์น้ำประจำจังหวัด<br />ปลาสลิด</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;