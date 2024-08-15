// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { getAllPackages } from './PackageService'; // Importing service to fetch package data
import './PackageList.css'; // Importing CSS file for styling
import { WidthFull } from '@mui/icons-material';

const Package = () => {
  // useState hooks for filter and menu items
  const [filter, setFilter] = useState('all');
  const [menuItems, setMenuItems] = useState([]);

   

  // useEffect hook to fetch packages on component mount
  useEffect(() => {
    getAllPackages()
      .then(response => {
        setMenuItems(response.data); // Setting menu items with fetched data
      })
      .catch(error => console.error(error)); // Logging any errors
  }, []);

  // Filtering menu items based on selected filter
  const filteredItems = menuItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'veg' && item.veg) return true;
    if (filter === 'non-veg' && !item.veg) return true;
    if (filter === 'rating' && item.rating >= 4.5) return true;
    return false;
  });
  
  return (
    <div className="menu-page">
    <h1>Packages</h1> {/* Page heading */}
    <div className="filter-selector">
    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
    <button onClick={() => setFilter('veg')} className={filter === 'veg' ? 'active' : ''}>Veg</button>
    <button onClick={() => setFilter('non-veg')} className={filter === 'non-veg' ? 'active' : ''}>Non-Veg</button>
    <button onClick={() => setFilter('rating')} className={filter === 'rating' ? 'active' : ''}>Rating > 4.5</button>
    </div>
    <div className="menu-items">
    {filteredItems.map(item => (
      <div key={item.id} className="menu-item">
      <Link to='/package1' style={{ textDecoration: 'none' }}>
      <table >
      <tr >
      <td>
            <img src={`http://localhost:8080${item.img}`} alt={item.name} className="menu-item-image" />
            </td>
            <td style={{width:'300px',paddingTop:'40px' , paddingRight:'30px'}}>
            <div className="menu-item-content">
                <h2>{item.packageName}</h2>
                <p>{item.packageDescription}</p>
                <p>Monthly</p>
                <p className="price">₹{item.price}</p>
                <p>Rating: {item.rating}</p>
              </div>
              </td>
              </tr>
            </table>
            </Link>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-column">
          <ul>
            <li>Home</li>
            <li>Packages</li>
            <li>Custom Order</li>
            <li>Blog</li>
            <li>About Us</li>
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
};

export default Package; // Exporting the component
