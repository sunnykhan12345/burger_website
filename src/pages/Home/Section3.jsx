import React from 'react'
import '../../styles/Section3.css'
import { Container,Row,Col } from 'react-bootstrap';
import image1 from '../../assets/assets/menu/burger-11.jpg'
import image2 from '../../assets/assets/menu/burger-12.jpg'
import image3 from '../../assets/assets/menu/burger-13.jpg'
import image4 from '../../assets/assets/menu/burger-14.jpg'
import image5 from '../../assets/assets/menu/burger-15.jpg'
import image6 from '../../assets/assets/menu/burger-16.jpg'
import image7 from '../../assets/assets/menu/burger-17.jpg'
import image8 from '../../assets/assets/menu/burger-18.jpg'
import Cardss from '../../components/Cardss';
import { Link } from 'react-router-dom';
const mocData =[
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:5,
      price:99.15
     
    },
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:5,
      price:99.15
     
    },
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:4,
      price:99.15
     
    },
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:2,
      price:99.15
     
    },
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:1,
      price:99.15
     
    },
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:5,
      price:99.15
     
    },
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:3,
      price:99.15
     
    },
    {
      id:"0001",
      image:image1,
      title:"crispy chicken",
      paragraph:"this is crispy chicken first discription for resturent.",
      rating:5,
      price:99.15
     
    },
  
  
]


const Section3 = () => {


  const randerRatingIcons =(rating) => {
      const stars=[];

      for(let i = 0; i < 5; i ++){
          if(rating > 0.5){
              stars.push(<i key={i} className='bi bi-star-fill'></i>)
              rating--;
          }else if(rating > 0 && rating < 1){
            stars.push(<i key={"half"} className='bi bi-star-half'></i>)
            rating--;
          }else{
            stars.push(<i key={`empty${i}`} className='bi bi-star'></i>)
          }
          
      }
      return stars;
  }
  return (
    <>
     <section className='menu_section'>
       <Container>
         <Row>
          <Col lg={{span:8, offset:2}}>
            <h2>our crazy burgers</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis vel eligendi,consectetur adipisicing .
            </p>
          </Col>
         </Row>
         <Row>
          {mocData.map((cardData, index) =>(
            <Cardss 
              image ={cardData.image} 
              rating ={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              randerRatingIcons={randerRatingIcons}
            />
          ))}
         </Row>

         <Row className='mt-5'>
          <Col sm={6} lg={5}>
            <div className='ads_box ads_img1 mb-5 mb-md-0'>
              <h4 className='mb-0'>get your free</h4>
              <h5>chees fries</h5>
              <Link to='/' className='btn-red'>
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className='ads_box ads_img2'>
              <h4 className='mb-0'>get your free</h4>
              <h5>chees fries</h5>
              <Link to='/' className='btn-red'>
                Learn More
              </Link>
            </div>
          </Col>
         </Row>
       </Container>
     </section>
    </>
  )
}

export default Section3
