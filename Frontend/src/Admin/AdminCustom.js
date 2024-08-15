import React, { useState } from 'react';

function CreateCustomOrder() {
  const [customOrderData, setCustomOrderData] = useState({
    vegNonVeg: '',
    city: '',
    breakfast: '',
    lunch: '',
    dinner: '',
    breakfastPrice: 0,
    lunchPrice: 0,
    dinnerPrice: 0,
    deliveryAt: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/customOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customOrderData),
    });

    if (response.ok) {
      alert('Order created successfully');
      setCustomOrderData({
        vegNonVeg: '',
        city: '',
        breakfast: '',
        lunch: '',
        dinner: '',
        breakfastPrice: 0,
        lunchPrice: 0,
        dinnerPrice: 0,
        deliveryAt: '',
      });
    } else {
      alert('Failed to create order');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',  // Adjusted width to accommodate label and input side by side
        margin: '50px auto',
        padding: '80px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',}}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Veg/Non-Veg:</label>
        <input
          type="text"
          value={customOrderData.vegNonVeg}
          onChange={(e) => setCustomOrderData({ ...customOrderData, vegNonVeg: e.target.value })}
          style={{ marginLeft: '20px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>City:</label>
        <input
          type="text"
          value={customOrderData.city}
          onChange={(e) => setCustomOrderData({ ...customOrderData, city: e.target.value })}
          style={{ marginLeft: '85px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Breakfast:</label>
        <input
          type="text"
          value={customOrderData.breakfast}
          onChange={(e) => setCustomOrderData({ ...customOrderData, breakfast: e.target.value })}
          style={{ marginLeft: '55px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Lunch:</label>
        <input
          type="text"
          value={customOrderData.lunch}
          onChange={(e) => setCustomOrderData({ ...customOrderData, lunch: e.target.value })}
          style={{ marginLeft: '70px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Dinner:</label>
        <input
          type="text"
          value={customOrderData.dinner}
          onChange={(e) => setCustomOrderData({ ...customOrderData, dinner: e.target.value })}
          style={{ marginLeft: '70px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Breakfast Price:</label>
        <input
          type="number"
          value={customOrderData.breakfastPrice}
          onChange={(e) => setCustomOrderData({ ...customOrderData, breakfastPrice: parseFloat(e.target.value) })}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Lunch Price:</label>
        <input
          type="number"
          value={customOrderData.lunchPrice}
          onChange={(e) => setCustomOrderData({ ...customOrderData, lunchPrice: parseFloat(e.target.value) })}
          style={{ marginLeft: '20px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Dinner Price:</label>
        <input
          type="number"
          value={customOrderData.dinnerPrice}
          onChange={(e) => setCustomOrderData({ ...customOrderData, dinnerPrice: parseFloat(e.target.value) })}
          style={{ marginLeft: '20px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Delivery At:</label>
        <input
          type="text"
          value={customOrderData.deliveryAt}
          onChange={(e) => setCustomOrderData({ ...customOrderData, deliveryAt: e.target.value })}
          style={{ marginLeft: '30px' }}
        />
      </div>
      <button type="submit" style={{padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
          width: '100%',marginTop:'30px'}}>Create Order</button>
    </form>
  );
}

export default CreateCustomOrder;
