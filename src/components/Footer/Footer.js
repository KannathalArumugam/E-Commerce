import React from "react";
import "./Footer.css";
import LogoImage from "./../../LogoImage.webp"


export default function Footer(props) {

    return (
        <div className="footer">
            <img className="logo_footer" src={LogoImage} alt="Logo" />
            <p className="logo-content_footer"><b>pay</b></p>
            <div className="about_savvy">{props.about}
                <div className="about_getIntouch">Get in touch:<img className="contactIcons1" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-email-interface-kiranshastry-lineal-kiranshastry-1.png" alt="" />
                    <img className="contactIcons2" src="https://img.icons8.com/ios/2x/facebook-f.png" alt="" />
                    <img className="contactIcons3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3Sj9C3MGLdyXT8knNkjwR0Zcm9jHXvSjxg&usqp=CAU" alt="" />
                    <img className="contactIcons4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGzoZbIWADzBpix1HZ3GI9d5W8ftQQUCX6Q&usqp=CAU" alt="" />
                    {/* <div class="footerterms  b-left"> T&amp;C's</div><div class="footerfaq b-left">FAQs</div><div class="footerprivacyPolicy b-left">Privacy Policy</div> */}

                    | T&amp;C's  |  FAQs  |  Privacy Policy  
                </div></div>


        </div>



    )
}