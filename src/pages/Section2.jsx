import React from 'react';
import '../styles/Section2.css';
import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pizza from '../assets/assets/about/pizza.png';
import saled from '../assets/assets/about/salad.png'
import delivery from '../assets/assets/about/delivery-bike.png'


// mock data 

const mockData =[
  {
    id:1,
    Image: pizza,
    title : "originals",
    paragraph : "this is burger first image card for this website we make good and clients this is burger first image card for this website we make good and clients "
  },
  {
    id:2,
    Image: saled,
    title : " Quality Food",
    paragraph : "this is burger first image card for this website we make good and clients this is burger first image card for this website we make good and clients"
  },
  {
    id:3,
    Image: delivery,
    title : "Healty Food",
    paragraph : "this is burger first image card for this website we make good and clients this is burger first image card for this website we make good and clients "
  }
]
const Section2 = () => {
  return (
    <>
      <section className='about_section'>
      <Container>
        <Row>
            <Col lg={{span:8, offset:2}} className='text-center'>
              <h2>the burger tests better when you eat it with your family</h2>
              <p>(bɜːʳgəʳ ) Word forms: plural burgers. countable noun. A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll, which is  .</p>
              <Link to='https://www.google.com' target='blank'>
                <button className='btn-red'>Explore Full Menu</button>
              </Link>
            </Col>
        </Row>
      </Container>
      </section>
      <section className='about_wrapper'>
        <Container>
        <Row className='justify-content-md-center'>
          {mockData.map((cardData,index) =>(
            <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
              <div className='about_box text-center'>
                <div className='about_icon'>
                  <img src={ cardData.Image} alt='imag' className='img-fluid' />
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                  <p></p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </Container>
      </section>
    </>
  )
}

export default Section2
