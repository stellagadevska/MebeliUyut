import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import "../styles/Home.css";

import heroImg from "../assets/images/hero-img.png";

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item) => item.category === "chair"
        );

        const filteredBestSalesProducts = products.filter(
            (item) => item.category === "sofa"
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
    }, []);

    const year = new Date().getFullYear();
    return (
        <Helmet title='Home'>
            <section className='hero_section'>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className='hero_content'>
                                <p className='hero_subtitle'>Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                </p>

                                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                                    <Link to='/shop'>SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className='hero_image'>
                                <img src={heroImg} alt='' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services />
            <section className='trending_products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section_title'>Trending Products</h2>
                        </Col>
                        <ProductsList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className='best_sales'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section_title'>Best Sales</h2>
                        </Col>
                        <ProductsList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
