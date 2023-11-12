import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../styles/footer.css"

const Footer = () => {
  return (
    <>
       <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>location</h5>
                <p>District Kurram</p>
                <p>lower ,3524</p>
                <p>united states</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>working hour</h5>
                <p>Mon-Fri :9:00AM - 10:00PM</p>
                <p>Sunday 12:00PM - 5:00PM</p>
                <p>united states</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>order now</h5>
                <p>best service provides</p>
                <Link to='tel: 03085342445' className='calling'>
                  +92 3085342445
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>follow us</h5>
                <p>District Kurram</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <ul className='list-unstyled text-center'>
                  <li>
                    <Link to='' >
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='' >
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='' >
                      <i className='bi bi-instagram'></i>
                    </Link>
                    </li>
                    <li>
                    <Link to='' >
                      <i className='bi bi-youtube'></i>
                    </Link>
                  </li>
                  
                </ul>
               
              </div>
            </Col>
          </Row>
        </Container>
       </footer>
    </>
  )
}

export default Footer
