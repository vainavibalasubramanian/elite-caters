import React, { useState } from 'react'; // Importing React and useState hook
import InstagramIcon from '@mui/icons-material/Instagram'; // Importing Instagram icon from Material UI
import FacebookIcon from '@mui/icons-material/Facebook'; // Importing Facebook icon from Material UI
import TwitterIcon from '@mui/icons-material/Twitter'; // Importing Twitter icon from Material UI
import img1 from '../PackageImages/p1.jpg'; // Importing an image
import './Package.css'; // Importing CSS file for styling
import { useNavigate } from 'react-router-dom';

const Package1 = () => {
  const nav = useNavigate();
  // useState hooks for week mode and filter
  const [weekMode, setWeekMode] = useState('week1');
  const [filter, setFilter] = useState('sunday');

  const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = localStorage.getItem('user') !== null;
  const userName = isLoggedIn ? user.userName : '';

  // Menu items data structure for different weeks
  const menuItems = {
    week1: [
      { id: 1, day: 'sunday', description: <p>Breakfast: Idli with sambar/coconut chutney<br />Lunch: Chicken Biryani <br /> Dinner: Naan and Butter Chicken</p>, veg: false },
      { id: 2, day: 'monday', description: <p>Breakfast: Dosa with sambar/coconut chutney<br />Lunch: Tomato rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 3, day: 'tuesday', description: <p>Breakfast: Pongal <br />Lunch: Curd rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 4, day: 'wednesday', description: <p>Breakfast: Utthappam<br />Lunch: Lemon rice <br /> Dinner: Upma</p>, veg: false },
      { id: 5, day: 'thursday', description: <p>Breakfast: Plain Utthappam<br />Lunch: Ghee rice <br /> Dinner: Poori with Chole</p>, veg: false },
      { id: 6, day: 'friday', description: <p>Breakfast: Sevai<br />Lunch: Mushroom rice <br /> Dinner: Podi Dosa</p>, veg: false },
      { id: 7, day: 'saturday', description: <p>Breakfast: Egg dosa<br />Lunch: Mini meals <br /> Dinner: Thin dosa</p>, veg: false },
    ],
    week2: [
      { id: 8, day: 'sunday', description: <p>Breakfast: Chappati with sambar/coconut chutney<br />Lunch: Chicken Biryani <br /> Dinner: Naan and Butter Chicken</p>, veg: false },
      { id: 9, day: 'monday', description: <p>Breakfast: Utthappam with sambar/coconut chutney<br />Lunch: Tomato rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 10, day: 'tuesday', description: <p>Breakfast: Poori <br />Lunch: Curd rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 11, day: 'wednesday', description: <p>Breakfast: Kichadi<br />Lunch: Lemon rice <br /> Dinner: Upma</p>, veg: false },
      { id: 12, day: 'thursday', description: <p>Breakfast: Plain Utthappam<br />Lunch: Ghee rice <br /> Dinner: Poori with Chole</p>, veg: false },
      { id: 13, day: 'friday', description: <p>Breakfast: Pongal<br />Lunch: Mushroom rice <br /> Dinner: Podi Dosa</p>, veg: false },
      { id: 14, day: 'saturday', description: <p>Breakfast: Egg dosa<br />Lunch: Mini meals <br /> Dinner: Thin dosa</p>, veg: false },
    ],
    week3: [
      { id: 15, day: 'sunday', description: <p>Breakfast: Onion Dosa with sambar/coconut chutney<br />Lunch: Chicken Biryani <br /> Dinner: Naan and Butter Chicken</p>, veg: false },
      { id: 16, day: 'monday', description: <p>Breakfast: Idiyappam <br />Lunch: Tomato rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 17, day: 'tuesday', description: <p>Breakfast: Pongal <br />Lunch: Curd rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 18, day: 'wednesday', description: <p>Breakfast: Kichadi<br />Lunch: Lemon rice <br /> Dinner: Upma</p>, veg: false },
      { id: 19, day: 'thursday', description: <p>Breakfast: Idly<br />Lunch: Ghee rice <br /> Dinner: Poori with Chole</p>, veg: false },
      { id: 20, day: 'friday', description: <p>Breakfast: Dosa with sambar/coconut chutney<br />Lunch: Mushroom rice <br /> Dinner: Podi Dosa</p>, veg: false },
      { id: 21, day: 'saturday', description: <p>Breakfast: Chappati<br />Lunch: Mini meals <br /> Dinner: Thin dosa</p>, veg: false },
    ],
    week4: [
      { id: 22, day: 'sunday', description: <p>Breakfast: Pongal<br />Lunch: Chicken Biryani <br /> Dinner: Naan and Butter Chicken</p>, veg: false },
      { id: 23, day: 'monday', description: <p>Breakfast: MasalaDosa with sambar/coconut chutney<br />Lunch: Tomato rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 24, day: 'tuesday', description: <p>Breakfast: Paniyaram <br />Lunch: Curd rice <br /> Dinner: Parotta</p>, veg: false },
      { id: 25, day: 'wednesday', description: <p>Breakfast: Kichadi<br />Lunch: Lemon rice <br /> Dinner: Upma</p>, veg: false },
      { id: 26, day: 'thursday', description: <p>Breakfast: Ghee Roast with sambar/coconut chutney<br />Lunch: Ghee rice <br /> Dinner: Poori with Chole</p>, veg: false },
      { id: 27, day: 'friday', description: <p>Breakfast: Sevai<br />Lunch: Mushroom rice <br /> Dinner: Podi Dosa</p>, veg: false },
      { id: 28, day: 'saturday', description: <p>Breakfast: Egg dosa<br />Lunch: Mini meals <br /> Dinner: Thin dosa</p>, veg: false },
    ],
  };

  // Filtering menu items based on selected day
  const filteredItems = menuItems[weekMode].filter(item => item.day === filter);

  const handleOrder = () =>{
    nav('/FinalOrder');
  }
  const handleLogin = () =>{
    nav('/Login');
  }

  return (
    <div>
      <img id='package_item_display' src={img1} alt="Package display" /> {/* Displaying the image */}
      <h2 style={{ paddingLeft: '30px', fontSize: '30px' }}>Package 1</h2> {/* Heading for Package 1 */}
      <div className="package-selector"> {/* Week selector buttons */}
        <button onClick={() => setWeekMode('week1')} className={weekMode === 'week1' ? 'active' : ''}>Week 1</button>
        <button onClick={() => setWeekMode('week2')} className={weekMode === 'week2' ? 'active' : ''}>Week 2</button>
        <button onClick={() => setWeekMode('week3')} className={weekMode === 'week3' ? 'active' : ''}>Week 3</button>
        <button onClick={() => setWeekMode('week4')} className={weekMode === 'week4' ? 'active' : ''}>Week 4</button>
      </div>
      <div className="filter-selector"> {/* Day filter buttons */}
        <button onClick={() => setFilter('sunday')} className={filter === 'sunday' ? 'active' : ''}>Sunday</button>
        <button onClick={() => setFilter('monday')} className={filter === 'monday' ? 'active' : ''}>Monday</button>
        <button onClick={() => setFilter('tuesday')} className={filter === 'tuesday' ? 'active' : ''}>Tuesday</button>
        <button onClick={() => setFilter('wednesday')} className={filter === 'wednesday' ? 'active' : ''}>Wednesday</button>
        <button onClick={() => setFilter('thursday')} className={filter === 'thursday' ? 'active' : ''}>Thursday</button>
        <button onClick={() => setFilter('friday')} className={filter === 'friday' ? 'active' : ''}>Friday</button>
        <button onClick={() => setFilter('saturday')} className={filter === 'saturday' ? 'active' : ''}>Saturday</button>
      </div>
      <div className="menu-items"> {/* Displaying filtered menu items */}
        {filteredItems.map(item => (
          <div key={item.id}>
            <p style={{fontSize:'30px'}}>{item.description}</p>
          </div>
        ))}
      </div>
      <div> {/* Total amount section */}
        <h2 style={{ paddingLeft: '30px', fontSize: '30px' }}>Total Amount</h2>
        <h4 style={{ paddingLeft: '30px' }}>Monthly</h4>
        <table id='tot_amount' style={{ marginLeft: '30px' }}>
          <tr>
            <td style={{ fontSize: '30px' }}>Food Amount</td>
            <td style={{ fontSize: '30px' }}>: ₹4,000</td>
          </tr>
          <tr>
            <td style={{ fontSize: '30px' }}>GST</td>
            <td style={{ fontSize: '30px' }}>: ₹70</td>
          </tr>
          <tr>
            <td style={{ fontSize: '30px' }}>Grand Total</td>
            <td style={{ fontSize: '30px' }}>: ₹4070</td>
          </tr>
        </table>
        {isLoggedIn ? (
        <button style={{ margin: '20px 30px' , backgroundColor:'rgb(4, 59, 21)' , color:'white' , padding:'5px 10px',border:'none' , borderRadius:'5px',cursor:'pointer' }} onClick={handleOrder}>Order</button>
      ) : (
        <>
        <button style={{ margin: '20px 30px' , backgroundColor:'rgb(4, 59, 21)' , color:'white' , padding:'5px 10px',border:'none' , borderRadius:'5px',cursor:'pointer' }} onClick={handleLogin}>Order</button> {/* Order button */}
      </>
    )}
      </div>
      <footer className="footer"> {/* Footer section */}
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
};

export default Package1; // Exporting the component
