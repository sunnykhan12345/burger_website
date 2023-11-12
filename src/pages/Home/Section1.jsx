import React from 'react'
import burger from '../../assets/assets/hero/hero-2.png'

import { Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <>
      <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0 '>
                    <div className='position-relative'>
                        <img src={burger} className='img-fluid rounded' alt='hero' />
                        <div className='price_badge'>
                            <div className='badge_text'>
                                <h4 className='h4_xs'>Only</h4>
                                <h4 className='h3_lg'>$6.99</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero_text text-center'>
                        <h1 className='text-white'>New Burger</h1>
                        <h2 className='text-white'>With Union</h2>
                        <p className='text-white'>
                            Feqiat Permises liqia resis larout ague  egets morese viewes twteers is lecuses premim at mega ipsum prmesis and forget this.
                        </p>
                        <Link to='/' className='order-now'>
                            Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Section1
