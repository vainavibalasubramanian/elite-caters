import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const FinalOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phn: '',
    date: ''
  });

  const [orderStatus, setOrderStatus] = useState(null); // State for order status
  const navigate = useNavigate(); // Hook to navigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/orders', formData);
      console.log('Order submitted:', response.data);
      setOrderStatus('success'); // Set status to success on successful submission

      // Redirect to the home page after a short delay
      setTimeout(() => {
        navigate('/');
      }, 4000); // 2-second delay before redirecting

    } catch (error) {
      console.error('Error submitting order:', error);
      setOrderStatus('error'); // Set status to error if submission fails
    }
  };

  return (
    <div>
      <div className="section" style={{ padding: '5%', fontSize: '20px', margin: '30px', boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.4)' }}>
        <h2>Delivery Details</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ paddingBottom: '20px' }}>
            Name:
            <input
              type="text"
              name="name"
              required
              style={{ padding: '10px', width: '20%', marginLeft: '126px' }}
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Phone Number:
            <input
              type="text"
              name="phn"
              required
              style={{ padding: '10px', width: '20%', marginLeft: '45px' }}
              value={formData.phn}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Address:
            <textarea
              name="address"
              required
              style={{ paddingTop: '30px', width: '30%', marginLeft: '110px' }}
              value={formData.address}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Date:
            <input
              type="date"
              name="date"
              required
              style={{ marginLeft: '140px' }}
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            style={{
              fontSize: '20px',
              backgroundColor: 'rgb(4, 59, 21)',
              color: 'white',
              borderRadius: '6px',
              padding: '10px 20px',
              border: 'none'
            }}
          >
            Submit
          </button>
        </form>
        {orderStatus === 'success' && <p style={{ color: 'green', marginTop: '20px' }}>Order successful!</p>}
        {orderStatus === 'error' && <p style={{ color: 'red', marginTop: '20px' }}>There was an error submitting your order. Please try again.</p>}
      </div>
    </div>
  );
};

export default FinalOrder;
