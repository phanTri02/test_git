import React from 'react';
// import { Navbar } from '../../components';
import { Container,Row, Col, Nav, Tab, Carousel, Button } from 'react-bootstrap';

import slide1 from '../../assets/english.png';
import slide2 from '../../assets/English1.png';
import './Homepage.css';
import { BiBookReader } from 'react-icons/bi';
import {GiTeacher} from 'react-icons/gi';
import {FaUserGraduate} from 'react-icons/fa';


const Homepage = () => {
    return (
        <div className='homepage__detail'>
            <Container fluid >
                <Row>
                    <Carousel controls={false} fade interval={1000}> 
                        <Carousel.Item>
                            <img src={slide1} alt="Slide" className='img__slide'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide2} alt="Slide" className='img__slide'/>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className='card__container'>
                        <div>
                            <h1>Thông tin thống kê của trung tâm</h1>
                            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate aliquam aliquid asperiores accusantium iste optio minima doloribus repellendus voluptatem, non possimus quo porro aperiam quibusdam? Tempora iusto pariatur laboriosam iure!</h4>
                        </div>
                        <div className='card__group'>
                            <div className="card__detail">
                                <BiBookReader className='card__icon'/>
                                <h1>5000+</h1>
                                <p>Học viên hiện đang theo học</p>
                            </div>
                            <div className="card__detail">
                                <GiTeacher className='card__icon'/>
                                <h1>300+</h1>
                                <p>Giáo viên được tuyển chọn</p>
                            </div>
                            <div className="card__detail">
                                <FaUserGraduate className='card__icon'/>
                                <h1>3000+</h1>
                                <p>Học viên đạt chuẩn đầu ra</p>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className='nav-item'>
                                    <Nav.Link  eventKey="first" className='nav-link'>
                                        <h2>4 - 6 Tuổi</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus odio reiciendis aspernatur libero quasi animi quia sit amet maiores obcaecati, voluptatem quaerat vitae voluptas saepe consequuntur expedita incidunt, asperiores atque?</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <h2>6 - 11 Tuổi</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus odio reiciendis aspernatur libero quasi animi quia sit amet maiores obcaecati, voluptatem quaerat vitae voluptas saepe consequuntur expedita incidunt, asperiores atque?</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <h2>11 - 15 Tuổi</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus odio reiciendis aspernatur libero quasi animi quia sit amet maiores obcaecati, voluptatem quaerat vitae voluptas saepe consequuntur expedita incidunt, asperiores atque?</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">
                                        <h2> Hơn 15 Tuổi</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus odio reiciendis aspernatur libero quasi animi quia sit amet maiores obcaecati, voluptatem quaerat vitae voluptas saepe consequuntur expedita incidunt, asperiores atque?</p>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className='course'>
                                        <div className='course__detail'>
                                            <h1>Tên khóa học</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aut culpa pariatur! Asperiores cum odit quod eos nostrum quia itaque architecto sapiente unde perspiciatis corporis, esse tenetur aperiam distinctio voluptate!</p>
                                            <a className='detail__btn' href="#">Xem chi tiết</a>
                                        </div>
                                        <img src={slide1} alt="Slide" className='tab__banner'/>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className='course'>
                                        <div className='course__detail'>
                                            <h1>Tên khóa học</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aut culpa pariatur! Asperiores cum odit quod eos nostrum quia itaque architecto sapiente unde perspiciatis corporis, esse tenetur aperiam distinctio voluptate!</p>
                                            <a className='detail__btn' href="#">Xem chi tiết</a>
                                        </div>
                                        <img src={slide1} alt="Slide" className='tab__banner'/>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className='course'>
                                        <div className='course__detail'>
                                            <h1>Tên khóa học</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aut culpa pariatur! Asperiores cum odit quod eos nostrum quia itaque architecto sapiente unde perspiciatis corporis, esse tenetur aperiam distinctio voluptate!</p>
                                            <a className='detail__btn' href="#">Xem chi tiết</a>
                                        </div>
                                        <img src={slide1} alt="Slide" className='tab__banner'/>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <div className='course'>
                                        <div className='course__detail'>
                                            <h1>Tên khóa học</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aut culpa pariatur! Asperiores cum odit quod eos nostrum quia itaque architecto sapiente unde perspiciatis corporis, esse tenetur aperiam distinctio voluptate!</p>
                                            <a className='detail__btn' href="#">Xem chi tiết</a>
                                        </div>
                                        <img src={slide1} alt="Slide" className='tab__banner'/>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                </Row>
            </Container>
        </div>
    );
}
 
export default Homepage;