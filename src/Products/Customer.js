
import React from "react";
import "./Customer.css";

export default function Customer(props) {

    return (
        <div className="custContainer">
            <div className="customer">
                <div className="custHeading">Hear from our customers</div>
                <div className="custReview">
                    <div className="swipper">
                        <div className="wrapper">
                            <div className="swiper-slide swiper-slide-active" >
                                <div className="carouselBox">
                                    <div className="customer__review">{props.content}</div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next">
                                <div className="carouselBox">
                                    <div className="customer__review">{props.content} </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="carouselBox">
                                    <div className="customer__review">{props.content}  </div>
                                </div>
                            </div>
                            {/* <div className="swiper-slide" ><div className="carouselBox"><div className="customer__review">Savvy is so far the best app of it's kind. User friendly, practical, and truly useful. All your finance planning is catered at one single place and feedbacks provided are worked upon for continued improvement.</div></div></div> */}

                        </div>
                    </div>
                </div>
                <div className="press_content">
                    <div className="press_headings"><center>Saavy in the Press</center></div>
                    <div className="media_reviews">
                        <div className="press_swipper">
                            <div className="media_wrapper">
                                <div className="swiper-slide_press swiper-slide-active" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div className="presscarouselBox">
                                        <div className="press__review"><img src="https://images.livemint.com/static/livemint-logo-v2.svg" height="50px" />
                                            <div className="press_description">{props.press_content1}</div></div>
                                    </div>
                                    <div className="presscarouselBox">
                                        <div className="press__review"><img src="https://www.tribuneindia.com/Content/images/Logo_eng.png" height="50px" />
                                            <div className="press_description">{props.press_content2}</div></div>
                                    </div>
                                    <div className="presscarouselBox">
                                        <div className="press__review"><img src="https://bsmedia.business-standard.com/_media/bs/theme/partner-content-theme/images/logo.jpg" height="45px" />
                                            <div className="press_description">{props.press_content3}</div></div>
                                    </div>
                                </div>
                                {/* <div className="swiper-slide_press swiper-slide-active" >
                                </div>
                                <div className="swiper-slide_press swiper-slide-active" >
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}

