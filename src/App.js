import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Customer from "./Products/Customer";
import Body from "./Products/body";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";
import Travel from "./Pages/Travel";
import Electronics from "./Pages/Electronics";
import Education from "./Pages/Education";
import ViewAll from "./Pages/ViewAll";

export default function App() {
  // const navigate = useNavigate();
  // const navigateEducation = () => {
  //   navigate('/education');
  // };
  // const navigateViewAll = () => {
  //   navigate('/');
  // };

  // const navigateElectonics = () => {
  //   navigate('/electronics');
  // };

  // const navigateTravel = () => {
  //   navigate('/travel');
  // };
  // let component
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <ViewAll />
  //     break
  //   case "/travel":
  //     component = <Travel />
  //     break
  //   case "/education":
  //     component = <Education />
  //     break
  //   case "/electronics":
  //     component = <Electronics />
  //     break
  // }
  return (



    <div className="App">
      <Header title="Get rewarded with" subtitle="SavvyPay"
        title1="Wish,Save and Buy for the" subtitle1="products you love,guilt free" payment_content="Shop securely,"
        payment_content1="setup payments with topnotch banks" />
      <>
        <NavBar />
        {/* <nav className='nav'>
          <ul>
            <li> <a href='/' onClick={navigateViewAll}>View All</a></li>
            <li> <a href='/travel' onClick={navigateTravel}>Travel</a></li>
            <li> <a href='/education' onClick={navigateEducation}>Education</a></li>
            <li> <a href='/electronics' onClick={navigateElectonics}>Electronics</a></li>

          </ul>
        </nav> */}
        <Routes>
          <Route path="/education" element={<Education />} />
          <Route path="/" element={<ViewAll />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>

      </>

      {/* {component} */}

      {/* <Body /> */}

      <Customer content="Savvy is so far the best app of it's kind. User friendly, practical, and truly useful. All your finance planning is 
      catered at one single place and feedbacks provided are worked upon for continued improvement."press_content1="CEO Rakesh Bhatia vouches for embedded savings via B2B2C firm"
        press_content2="Business-friendly apps to saving apps to immunity boosters.."
        press_content3="Savings and payments startup Savvy raises Rs15 cr in Pre-Series A rounds" />
      <Footer about="SavvyPay is a technology services provider and is not a financial institution. The savings product and banking services provided by Yes Bank Limited (an associate of State Bank of India) in association with a technology service provider; all offers and discounts are subject to terms and conditions of the product manufacturers. Copyright ©️ Yellow Sky Technologies Private Limited." />
    </div>


  );
}


