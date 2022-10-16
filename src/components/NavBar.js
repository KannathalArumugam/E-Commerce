import React from 'react'
import './NavBar.css';
import { useNavigate, Link } from 'react-router-dom';
export default function NavBar() {
    const navigate = useNavigate();
    const navigateEducation = () => {
        navigate('/education');
    };
    const navigateViewAll = () => {
        navigate('/');
    };

    const navigateElectonics = () => {
        navigate('/electronics');
    };

    const navigateTravel = () => {
        navigate('/travel');
    };
    return (
        <nav className='nav'>
            <ul>
                <li> <a href='/' onClick={navigateViewAll}>View All</a></li>
                <li> <a href='/travel' onClick={navigateTravel}>Travel</a></li>
                <li> <a href='/education' onClick={navigateEducation}>Education</a></li>
                <li> <a href='/electronics' onClick={navigateElectonics}>Electronics</a></li>
            </ul>
        </nav>
    )
}

