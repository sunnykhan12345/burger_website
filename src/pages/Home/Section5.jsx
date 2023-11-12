import React from 'react'
import '../../styles/Section5.css'
import { Container,Row ,Col,Carousel } from 'react-bootstrap'
import ios from '../../assets/assets/shop/appstore.png'
import andriod from '../../assets/assets/shop/googleplay.png'
import shop from '../../assets/assets/shop/e-shop.png'
import { Link } from 'react-router-dom'
import brand1 from '../../assets/assets/brands/brand-11.png'
import brand2 from '../../assets/assets/brands/brand-12.png'
import brand3 from '../../assets/assets/brands/brand-13.png'
import brand4 from '../../assets/assets/brands/brand-14.png'
import brand5 from '../../assets/assets/brands/brand-15.png'
import brand6 from '../../assets/assets/brands/brand-16.png'
import brand7 from '../../assets/assets/brands/brand-17.png'
import brand8 from '../../assets/assets/brands/brand-18.png'
const Section5 = () => {
  return (
    <>
    <section className='shop_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                    <h4>download mobile app and</h4>
                    <h2>save up to 20%</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique!
                    </p>
                    <Link to='/'>
                        <img src={ios} alt='ios' className='img-fluid me-3 store'/>
                    </Link>
                    <Link to='/'>
                        <img src={andriod} alt='andriod' className='img-fluid me-3 store'/>
                    </Link>
                </Col>
                <Col lg={6}>
                    <img src={shop} alt='e-shop' className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    </section>

    <section className='brand_section'>
        <Container>
            <Row>
                <Col lg={6}>
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='brand_img'>
                    <img src={brand1} alt='brand1' className='img-fluid'/>
                </div>
                <div className='brand_img'>
                    <img src={brand2} alt='brand1' className='img-fluid'/>
                </div>
                <div className='brand_img'>
                    <img src={brand3} alt='brand1' className='img-fluid'/>
                </div>
                <div className='brand_img'>
                    <img src={brand4} alt='brand1' className='img-fluid'/>
                </div>
                <div className='brand_img'>
                    <img src={brand5} alt='brand1' className='img-fluid'/>
                </div>
                <div className='brand_img'>
                    <img src={brand6} alt='brand1' className='img-fluid'/>
                </div>
                <div className='brand_img'>
                    <img src={brand7} alt='brand1' className='img-fluid'/>
                </div>
                <div className='brand_img'>
                    <img src={brand8} alt='brand1' className='img-fluid'/>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section5
