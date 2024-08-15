import React from 'react';
import Slider from 'react-slick';
import Profile1 from './Images/Profile1.jpg';
import Profile2 from './Images/Profile2.jpg';
import Profile3 from './Images/Profile3.jpg';
import aboutImg from './Images/aboutImg.jpeg'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Aboutus.css';

function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the speed to 2000ms (2 seconds)
  };

  return (
    <div className="about-us-container">
    <div>
    <h1 style={{ fontSize: '60px',position:'absolute',color:'white',marginLeft:'60px',marginTop:'170px',fontStyle:'initial'}}>ABOUT US</h1>
    <p style={{ fontSize: '30px',position:'absolute',color:'white',marginLeft:'60px',marginTop:'120px'}}>_____________</p>
    <img src={aboutImg} id='about-img'/>
    </div>
      <section className="intro-section">
        <p style={{ fontSize: '25px', textAlign: 'center' ,margin:'30px'}}>
        EliteCaters is a premier food service company dedicated to delivering exceptional culinary experiences through flexible meal plans and customized orders. We offer a variety of food packages tailored to fit both monthly and weekly needs, ensuring that our customers receive fresh, delicious meals that align with their schedules and dietary preferences. With an emphasis on quality, convenience, and personalization, EliteCaters is committed to making mealtime both enjoyable and hassle-free.
        </p>
      </section>
      <hr/>
      <section className="reviews-section" style={{margin:'0px 30px 30px 30px'}}>
        <h1 style={{color:'black' , fontSize:'30px'}}>Customer Reviews</h1>
        <Slider {...settings}>
          <div className="review-card">
            <img src={Profile1} alt="John Doe" className="review-image" />
            <h3>John Doe</h3>
            <p style={{color:'black'}}>"Great service and friendly staff!"</p>
            <div className="stars">
              ★★★★★
            </div>
          </div>
          <div className="review-card">
            <img src={Profile2} alt="Jane Smith" className="review-image" />
            <h3>Jane Smith</h3>
            <p style={{color:'black'}}>"I love the quality of their products."</p>
            <div className="stars">
              ★★★★★
            </div>
          </div>
          <div className="review-card">
            <img src={Profile3} alt="Michael Brown" className="review-image" />
            <h3>Michael Brown</h3>
            <p style={{color:'black'}}>"Fast and reliable delivery every time."</p>
            <div className="stars">
              ★★★★★
            </div>
          </div>
        </Slider>
      </section>
      <section className="contact-section">
        <h2 style={{marginLeft:'30px'}}>Contact Us</h2>
        <p style={{fontSize:'20px',marginLeft:'30px'}}>Address: 123 Main Street,<br /> Coimbatore, TamilNadu - 641008 <br /> Phone Number: +912345678910</p>
        <div className="map" style={{margin:'30px'}}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.403006845318!2d144.95592331590765!3d-37.81720944202402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e13261114a1!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1597640912840!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-column">
          <ul>
            <li>Home</li>
            <li>Packages</li>
            <li>Custom Order</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Address :</li>
            <li>ABC street, Coimbatore</li>
            <li>641008</li>
          </ul>
        </div>
        <div style={{marginTop:'40px'}}>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <div>Copyright © 2024, EliteCaters.</div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
