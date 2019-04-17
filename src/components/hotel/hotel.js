import React from "react";
<<<<<<< HEAD
import L from "./hotelList";
=======
import I from "./hotelItem";
>>>>>>> 56788399a783add3c029d14625aabde39a1e4e85

class hotel extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/Samutprakarn/images/hotel/1.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>โรงแรมทับทิมสยาม สุวรรณภูมิ</h2>
                        <p className="title">&emsp;&emsp;&emsp;Tubtim Siam Suvarnabhumi Hotel ตั้งอยู่ในจังหวัดสมุทรปราการ ห่างจากตำบลบางกะเจ้า 23 กม. โรงแรมระดับ 4 ดาวแห่งนี้มีสวน ลานระเบียง บริการอินเทอร์เน็ตไร้สาย (WiFi) ฟรี แผนกต้อนรับ 24 ชั่วโมง เครื่องเบิกถอนเงินสด และบริการแลกเปลี่ยนเงินตราต่างประเทศ</p>
                        <p className="title">&emsp;&emsp;&emsp;ห้องพักแต่ละห้องของ Tubtim Siam Suvarnabhumi Hotel มีโต๊ะทำงาน ตู้เสื้อผ้า โทรทัศน์จอแบน ห้องน้ำส่วนตัวพร้อมฝักบัวและเครื่องใช้ในห้องน้ำฟรี บางห้องยังมีระเบียง</p>
                        <p className="title">&emsp;&emsp;&emsp;ตั้งอยู่ห่างจากสนามบินสุวรรณภูมิซึ่งเป็นสนามบินที่อยู่ใกล้ที่สุด 17 กม.</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <img src="/Samutprakarn/images/hotel/2.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>S115 Residence</h2>
                        <p className="title">&emsp;&emsp;&emsp;ตั้งอยู่ในจังหวัดสมุทรปราการ ที่พักมีบริการอินเทอร์เน็ตไร้สาย (WiFi) ฟรี แผนกต้อนรับ 24 ชั่วโมง ลานระเบียง ที่พักอยู่ห่างจากบางกระเจ้า 8 กิโลเมตร</p>
                        <p className="title">&emsp;&emsp;&emsp;ห้องพักทุกห้องที่โรงแรมมีโต๊ะทำงาน โทรทัศน์จอแบน ห้องน้ำส่วนตัวพร้อมเครื่องใช้ในห้องน้ำฟรี ในขณะที่บางห้องมีระเบียง ที่พักมีตู้เย็น</p>
                        <p className="title">&emsp;&emsp;&emsp;ที่พักตั้งอยู่ห่างจากสนามบินสุวรรณภูมิ ซึ่งเป็นสนามบินที่อยู่ใกล้ที่สุด 18 กิโลเมตร</p>

                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <img src="/Samutprakarn/images/hotel/3.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>เตียกุ่ยฮวด@ตึกชัย</h2>
                        <p className="title">&emsp;&emsp;&emsp;ตั้งอยู่ในจังหวัดสมุทรปราการ ให้บริการห้องพักปรับอากาศที่สะดวกสบาย พร้อมบริการอินเทอร์เน็ตไร้สาย (Wi-Fi) ฟรีทั่วบริเวณที่พัก</p>
                        <p className="title">&emsp;&emsp;&emsp;มีที่จอดรถในสถานที่ ใช้เวลาเดินทางโดยรถยนต์ 20 นาทีจากมหาวิทยาลัยอัสสัมชัญ (เอแบค) วิทยาเขตบางนา และใช้เวลาเดินทางโดยรถยนต์ 25 นาทีจากศูนย์การค้าเมกาบางนา และเดินทางโดยรถยนต์ไปยังสนามบินนานาชาติสุวรรณภูมิภายใน 30 นาที</p>
                        <p className="title">&emsp;&emsp;&emsp;ห้องพักตกแต่งอย่างเรียบง่าย มีตู้เย็น เคเบิลทีวีจอแบน พื้นที่นั่งเล่น และห้องน้ำในตัวพร้อมฝักบัวและเครื่องใช้ในห้องน้ำฟรี</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <img src="/Samutprakarn/images/hotel/4.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>Villa Volpi Bed and Breakfast</h2>
                        <p className="title">&emsp;&emsp;&emsp;ตั้งอยู่ภายในหมู่บ้านส่วนตัวที่มีประตูรั้วล้อมรอบในจังหวัดสมุทรปราการ ห่างจากสนามบินนานาชาติสุวรรณภูมิ 22 กม. ที่พักแห่งนี้มีห้องนอนที่แตกต่างกัน 3 ห้องพร้อมเฟอร์นิเจอร์ดั้งเดิม และบริการรถรับส่งสนามบินฟรี</p>
                        <p className="title">&emsp;&emsp;&emsp;ห้องพักปรับอากาศส่วนตัวมีระเบียงพร้อมที่นั่ง ตู้นิรภัย โทรทัศน์ระบบช่องสัญญาณเคเบิล มินิบาร์ ห้องน้ำส่วนตัวพร้อมฝักบัวน้ำอุ่น เครื่องเป่าผม ผ้าขนหนู และเครื่องใช้ในห้องน้ำฟรี</p>
                        <p className="title">&emsp;&emsp;&emsp;ที่พักแห่งนี้มีพื้นที่ส่วนกลางพร้อมสระว่ายน้ำ โต๊ะสนุกเกอร์ อุปกรณ์บาร์บีคิว ศาลาในสวน และบริการอินเทอร์เน็ตไร้สาย (WiFi) ฟรีในพื้นที่ส่วนกลาง</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <img src="/Samutprakarn/images/hotel/5.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>Srivaree Pavilion Hotel and Training Center</h2>
                        <p className="title">&emsp;&emsp;&emsp;ตั้งอยู่ในจังหวัดสมุทรปราการ ห่างจากตำบลบางกระเจา 23 กม. และให้บริการที่พักพร้อมอินเทอร์เน็ตไร้สาย (WiFi) ฟรี โรงแรมระดับ 4 ดาวแห่งนี้มีบริการแผนกต้อนรับตลอด 24 ชั่วโมง ตู้เอทีเอ็ม และห้องอาหาร</p>
                        <p className="title">&emsp;&emsp;&emsp;ที่พักมีบริการบุฟเฟต์อาหารเช้าทุกวัน</p>
                        <p className="title">&emsp;&emsp;&emsp;สนามบินสุวรรณภูมิอยู่ห่างจากที่พัก 8 กม.</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default hotel;
