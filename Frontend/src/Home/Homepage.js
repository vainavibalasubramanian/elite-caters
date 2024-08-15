import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import img1 from './Images/img1.jpg';
import img2 from './Images/Lunch.jpg';
import img4 from './Images/BreakFast.jpg';
import img5 from './Images/Dinner.jpg';

import img9 from './Images/pac1.avif';
import img10 from './Images/pac2.jpg';
import img11 from './Images/pac4.avif';
import img12 from './Images/pac3.jpg';
import img13 from './Images/pac5.jpg';

import './Home.css';
import {Link , useNavigate } from 'react-router-dom';

const Item = ({ name, image, subtitle, price }) => (
  <div className="item">
    <img src={image} alt={name} className="item-image" />
    <div className="item-details">
      <h3 className="item-title">{name}</h3>
      <p className="item-subtitle">{subtitle}</p>
      <div className="item-footer">
        <span className="item-price">{price}</span>
      </div>
      <Link to={`/${name}`}>
       <button className="item-button" >Select</button>
      </Link>
    </div>
  </div>
);

const itemData = [
  {
    img: img4,
    title: 'Breakfast',
    description: 'Start your day right with our delicious breakfast options. Indulge in a variety of fresh and energizing dishes to fuel your morning.',
  },
  {
    img: img2,
    title: 'Lunch',
    description: 'Enjoy a delicious and fulfilling lunch with our wide range of options that cater to every taste and preference.',
  },
  {
    img: img5,
    title: 'Dinner',
    description: 'End your day with our exquisite dinner offerings, featuring gourmet meals that are sure to satisfy your cravings.',
  },
];

function Homepage() {
  const nav = useNavigate();
  const HandlePackage = () =>{
    nav('/packageList')
  }
  const [category, setCategory] = useState('box');
  const recommendations = {
    box: {
      items: [
        { name: 'Package1', image: img9, subtitle: 'Monthly', price: '₹4,000' },
        { name: 'Package2', image: img11, subtitle: 'Monthly', price: '₹6,402' },
        { name: 'Package3', image: img10, subtitle: 'Monthly', price: '₹5,962' },
        { name: 'Package4', image: img12, subtitle: 'Monthly', price: '₹5,434' },
        { name: 'Package5', image: img13, subtitle: 'Monthly', price: '₹5,434' }
      ],
    },
  };

  const categories = Object.keys(recommendations);

  return (
    <div>
      <Box>
        <Box
          sx={{
            height: '50vh',
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 4, textAlign: 'center' }}>
            <Typography variant="h3">Let Us Cater to Your Every Culinary Desire</Typography>
          </Box>
        </Box>
      </Box>
      <div>
        <div style={{ marginTop: '60px', fontSize: '40px', textAlign: 'center' }}>Meals of the Day</div>
      </div>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <ImageList sx={{ width: '100%' }} cols={3} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className="image-list-item">
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: '65%', height: '40vh', marginLeft: '90px', borderRadius: '50px', marginTop: '30px' }}
              />
              <Typography className="image-title" sx={{ fontSize: '25px' }}>{item.title}</Typography>
              {item.description && (
                <Typography variant="body2" color="black" component="div" sx={{ textAlign: 'center', mt: 6, width: '70%', paddingLeft: '80px' }}>
                  {item.description.split('. ').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index !== item.description.split('. ').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </Typography>
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <div>
        <div style={{ marginTop: '60px', fontSize: '40px', textAlign: 'center', paddingBottom: '20px' }}>Meal Packages</div>
      </div>
      <div className="food-package">
        <div className="category-list">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`category-item ${category === cat ? 'selected' : ''}`}
              onClick={() => setCategory(cat)}
            >
              <div className="items-row">
                {recommendations[cat].items.map((item, index) => (
                  <Item key={index} name={item.name} image={item.image} subtitle={item.subtitle} price={item.price} />
                ))}
                <button id='viewMore' onClick={HandlePackage} style={{cursor:'pointer'}}>view more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default Homepage;
