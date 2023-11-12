import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import '../../styles/Section4.css'
import promotion from '../../assets/assets/promotion/pro.png'

const Section4 = () => {
  return (
   <>
   <section className='promotionse_section'>
    <Container>
        <Row className='align-items-center'>
            <Col lg={6} className='text-center mb-5 mb-lg-0'>
              <img src={promotion} alt='promotion' className='img-fluid'/>
            </Col>
            <Col lg={6} className='px-5'>
                <h2>nothing brings people together like a good burger</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, consequatur, sequi rem est reiciendis veniam molestias, vitae praesentium perspiciatis eos doloribus. Similique vitae dolorem saepe. Rerum totam vero officiis saepe.

                </p>
                <ul>
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, animi good for this burger!
                        </p>
                    </li>
                    <li>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. enjoying yourself !</p>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
   </section>

   <section className='bg_paralex_section'></section>
   </>
  )
}

export default Section4
