// import React, { useState } from 'react';
// import './OrderList.css';
// import { useLocation } from 'react-router-dom';

// function OrderList() {
//   const location = useLocation();
//   const { formData, totalPrice } = location.state || {};
//   const [data, setFormData] = useState({
//     meals: {
//       breakfast: [],
//       lunch: [],
//       dinner: [],
//     },
//     address: '',
//     count: 1,
//     date: '',
//     time: '',
//     preference: 'veg',
//   });

//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       const [mealType, foodItem] = name.split('.');
//       setFormData((prevData) => ({
//         ...prevData,
//         meals: {
//           ...prevData.meals,
//           [mealType]: checked
//             ? [...prevData.meals[mealType], foodItem]
//             : prevData.meals[mealType].filter((item) => item !== foodItem),
//         },
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setOrderPlaced(true);
//   };

//   return (
//     <div className="order-container">
//       <h1>Place Your Order</h1>
//       <form onClick={handleSubmit}>
//         <div className="section" style={{ backgroundColor: 'black', color: 'white', padding: '20px 20px' }}>
//           <h2 style={{ paddingLeft: '10%' }}>Meal Selection</h2>
//           <div className="meal-section">
//             {formData ? (
//               <div>
//                 <p><strong>Breakfast:</strong> {formData.breakfast}</p>
//                 <p><strong>Lunch:</strong> {formData.lunch}</p>
//                 <p><strong>Dinner:</strong> {formData.dinner}</p>
//               </div>
//             ) : (
//               <p>No order data available.</p>
//             )}
//           </div>
//         </div>

//         <div className="section" style={{ paddingLeft: '10%', fontSize: '20px' }}>
//           <h2>Delivery Details</h2>
//           {/* Delivery form fields... */}
//         </div>

//         <div style={{ fontSize: '30px', paddingLeft: '150px' }}>₹{totalPrice}</div>
//         <button type="submit" style={{ marginLeft: '10%', fontSize: '20px', backgroundColor: 'black', color: 'white', borderRadius: '6px', padding: '10px 20px' }}>
//           Pay
//         </button>
//       </form>
//       {orderPlaced && (
//         <div className="popup" style={{ marginLeft: '10%', fontSize: '25px' }}>
//           <h2>Order Placed</h2>
//           <p>Your order has been placed successfully!</p>
//           <button onClick={() => setOrderPlaced(false)} style={{ marginLeft: '10%', fontSize: '20px', backgroundColor: 'black', color: 'white', borderRadius: '6px', padding: '10px 20px' }}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OrderList;

import React, { useState, useEffect } from 'react';
import './OrderList.css';
import { useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import img from '../Packages/PackageImages/p3.jpg';
import { useNavigate } from 'react-router-dom';

function OrderList() {
  const location = useLocation();
  const { formData } = location.state || {};
  const nav = useNavigate();
  // State for the counts of meals
  const [breakfastCount, setBreakfastCount] = useState(formData?.breakfastCount || 1);
  const [lunchCount, setLunchCount] = useState(formData?.lunchCount || 1);
  const [dinnerCount, setDinnerCount] = useState(formData?.dinnerCount || 1);

  // State for the total price
  const [totalPrice, setTotalPrice] = useState(0);

  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    // Calculate the total price whenever the counts change
    const breakfastPrice = (formData?.breakfastPrice || 0) * breakfastCount;
    const lunchPrice = (formData?.lunchPrice || 0) * lunchCount;
    const dinnerPrice = (formData?.dinnerPrice || 0) * dinnerCount;
    setTotalPrice(breakfastPrice + lunchPrice + dinnerPrice);
  }, [breakfastCount, lunchCount, dinnerCount, formData]);

  const handleSubmit = (e) => {
    nav('/finalOrder')
  };
  const handleLogin = () =>{
    nav('/Login');
  }

  const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = localStorage.getItem('user') !== null;
  const userName = isLoggedIn ? user.userName : '';

  return (
    <div className="order-container">
      <img src={img} id='package_item_display'></img>
      <h1>Place Your Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="section" >
          <div className="meal-section" style={{ boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.5)', margin:'30px' }}>
            {formData ? (
              <div style={{  color: 'black', padding: '10px 30px' , marginRight:'50px' , borderRadius:'10px' }}>
                <table>
                <tr>
                  <td>
                  <p style={{fontSize:'40px'}}>Breakfast:</p>
                  </td>
                  <td style={{paddingRight:'100px'}}>
                  <p>{formData.breakfast} </p>
                  </td>
                  <td style={{paddingLeft:'100px'}}>
                    <p>
                    <label >count: </label>
                    <input 
                      type="number" 
                      min="1" 
                      value={breakfastCount} 
                      onChange={(e) => setBreakfastCount(Number(e.target.value))} 
                      className="count-input"
                      style={{width:'60px'}}
                    />
                  </p>
                  </td>
                </tr>
                <tr>
                <td>
                <p style={{fontSize:'40px'}}>Lunch:</p>
                </td>
                <td style={{paddingRight:'100px'}}>
                <p>{formData.lunch}</p>
                </td>
                <td style={{paddingLeft:'100px'}}>
                <p>
                <label >count: </label>
                  <input 
                    type="number" 
                    min="1" 
                    value={lunchCount} 
                    onChange={(e) => setLunchCount(Number(e.target.value))} 
                    className="count-input"
                    style={{width:'60px'}}
                  />
                </p>
                </td>
                </tr>
                 <tr>
                 <td>
                 <p style={{fontSize:'40px'}}>Dinner:</p>
                 </td>
                 <td>
                  <p>{formData.dinner} </p>
                 </td>
                 <td style={{paddingLeft:'100px'}}>
                 <p>
                <label>count: </label> 
                  <input 
                    type="number" 
                    min="1" 
                    value={dinnerCount} 
                    onChange={(e) => setDinnerCount(Number(e.target.value))} 
                    className="count-input"
                    style={{width:'60px'}}
                  />
                </p>
                 </td>
                 </tr>
                <tr >
                  <td></td>
                  <td></td>
                  <td><div style={{ fontSize: '30px',marginLeft:'40%',paddingBottom:'30px' }}>Total: ₹ {totalPrice} </div>
                  </td>
                  <td>
                  {isLoggedIn ? (
                  <button
                    type="submit"
                    style={{
                    
                      fontSize: '20px',
                      backgroundColor: 'rgb(4, 59, 21)',
                      color: 'white',
                      borderRadius: '6px',
                      padding: '10px 20px',
                      border:'none',
                      marginBottom:'35px'
                    }}
                  >
           Order
          </button>
        ) : (
          <>
          <button
                    onClick={handleLogin}
                    style={{
                    
                      fontSize: '20px',
                      backgroundColor: 'rgb(4, 59, 21)',
                      color: 'white',
                      borderRadius: '6px',
                      padding: '10px 20px',
                      border:'none',
                      marginBottom:'35px'
                    }}
                  >
           Order
          </button>
           </>
    )}
          </td>
                </tr>
                </table>
                
              </div>
              
            ) : (
              <p>No order data available.</p>
            )}
            </div>
            
            
        </div>

        
        <div className="section" style={{ padding: '5%', fontSize: '20px' , margin:'30px'}}>
        {/*// <h2>Delivery Details</h2>
        // <div style={{paddingBottom:'20px' }}>
        //     Address  
        //     <textarea type="textBox"
        //     name="address"
        //     required
        //     style={{PaddingTop:'30px' , width:'30%' , marginLeft:'5px'}}
        //     ></textarea>
        //   </div>
        //   <div style={{paddingBottom:'20px'}}>
        //     Date 
        //     <input
        //       type="date"
        //       name="date"
              
        //       required
        //       style={{marginLeft:'30px'}}
        //     />
        //   </div>*/}
          
          
        </div>
      </form>
      
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
}

export default OrderList;
