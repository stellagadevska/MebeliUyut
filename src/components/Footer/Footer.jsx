import React from "react";
import "./Footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                        <div className='logo'>
                            <h1 className='text-white'>Furniture</h1>
                        </div>

                        <p className='footer_text mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Col>

                    <Col lg='3' md='3' className='mb-4'>
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' md='3' className='mb-4'>
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' md='4'>
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Contact</h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class='ri-map-pin-line'></i>
                                    </span>
                                    <p>48, Sitnyakovo Blv., Sofia, Bulgaria</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class='ri-phone-line'></i>
                                    </span>
                                    <p>+359878346***</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class='ri-mail-line'></i>
                                    </span>
                                    <p>stelaadevska@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className='footer_copyright'>Copyright {year}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
