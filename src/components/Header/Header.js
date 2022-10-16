import React from "react";
import "./Header.css";
import BannerImage from "./../../banner.jpg"
import LogoImage from "./../../LogoImage.webp"
import Bank1 from "./../../Bank1.png"
import Bank2 from "./../../Bank2.png"
import Bank3 from "./../../Bank3.png"
import Bank4 from "./../../Bank4.png"
import CartImage from "./../../Images/CartImage.gif"

export default function Header(props) {
    const data = [
        {
            img: Bank1,
        },
        {
            img: Bank2,
        },
        {
            img: Bank3,
        },
        {
            img: Bank4,
        },
    ]
    return (
        <div>
            <div className="header">
                <img className="logo" src={LogoImage} onClick={() => { Header() }} alt="Logo" />

                <p className="logo-content">pay</p>

                <img src={CartImage} alt="Cart" className="buttonCart__image" />
            </div>
            <div className="banner-main">
                <img className="bannerStyle" src={BannerImage} alt=""></img>
                <div className="whole-right">
                    <p className="banner-right">{props.title}<br></br>{props.subtitle}</p>
                    <p className="banner-right1">{props.title1}<br></br>{props.subtitle1}</p><br>
                    </br>
                    <button className="button_header">KNOW MORE </button>
                </div>
            </div>
            <div className="payment-main">
                <span className="bank_dealers"><b>{props.payment_content}</b>{props.payment_content1}</span><div>
                    {data.map((im, i) => (
                        <img key={i} className={`bank_image${i + 1}`} src={im.img}></img>

                    ))}
                    {/* <img className="bank_image2" src={Bank2} alt="icici"></img>
                    <img className="bank_image3" src={Bank3} alt="axis"></img>
                    <img className="bank_image4" src={Bank4} alt="axis"></img> */}
                </div>
            </div>
            {/* <div className="list_of_products">
                <span className="active_products">View All</span>
                <span className="active_products_false"> Travel
                </span>
                <span className="active_products_false"> Education</span>
                <span className="active_products_false"> Electronics</span>
            </div> */}
        </div >
    );
}
