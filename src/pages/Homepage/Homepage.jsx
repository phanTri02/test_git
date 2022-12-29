import React from 'react';
// import { Navbar } from '../../components';
import { Container,Row, Col, Nav, Tab, Carousel, Button } from 'react-bootstrap';

import slide1 from '../../assets/english.png';
import slide2 from '../../assets/English1.png';
import './Homepage.css';
import { BiBookReader } from 'react-icons/bi';
import {GiTeacher} from 'react-icons/gi';
import {FaUserGraduate} from 'react-icons/fa';
import { Client, Education, FeaturedProducts, Hero, Packages, WhatWeHave } from '../../components';


const Homepage = () => {
    return (
        
        <div className='homepage__detail'>
            {/* <Navbar/> */}
            <Container fluid >
                <Hero />
                <WhatWeHave />
                <Education />
                <Packages />
                <FeaturedProducts />
            </Container>
        </div>
    );
}
 
export default Homepage;