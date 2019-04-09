import React from "react";

class Slides extends React.Component {
    render() {
        return (
            <div>
                <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/Samutprakarn/images/slides/1.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>ป้อมยุทธนาวี</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Samutprakarn/images/slides/2.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>พระเจดีย์กลางน้ำ</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Samutprakarn/images/slides/3.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>ฟาร์มจระเข้ใหญ่</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Samutprakarn/images/slides/4.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>งามวิไลเมืองโบราณ</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Samutprakarn/images/slides/5.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>สงกรานต์พระประแดง</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Samutprakarn/images/slides/6.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>ปลาสลิดแห้งรสดี</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Samutprakarn/images/slides/7.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>ประเพณีรับบัว</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Samutprakarn/images/slides/8.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>คำขวัญจังหวัดสมุทรปราการ</h5>
                                    <p>ครบถ้วนทั่วอุตสาหกรรม</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slides;