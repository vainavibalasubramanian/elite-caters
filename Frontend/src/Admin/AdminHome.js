import React, { useState } from 'react';

function CreatePackage() {
  const [packageData, setPackageData] = useState({
    packageName: '',
    packageDescription: '',
    price: 0,
    veg: false,
    rating: 0,
    img: '',
  });
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('packageDTO', new Blob([JSON.stringify(packageData)], { type: 'application/json' }));
    formData.append('file', file);

    const response = await fetch('http://localhost:8080/packages', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Package created successfully');
    } else {
      alert('Failed to create package');
    }
  };

  return  (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',  // Adjusted width to accommodate label and input side by side
        margin: '50px auto',
        padding: '80px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
        <label style={{ width: '70%' }}>Package Name</label>
        <input
          type="text"
          placeholder="Package Name"
          value={packageData.packageName}
          onChange={(e) => setPackageData({ ...packageData, packageName: e.target.value })}
          style={{ padding: '8px', width: '70%' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
        <label style={{ width: '70%' }}>Package Description</label>
        <input
          type="text"
          placeholder="Package Description"
          value={packageData.packageDescription}
          onChange={(e) => setPackageData({ ...packageData, packageDescription: e.target.value })}
          style={{ padding: '8px', width: '70%' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
        <label style={{ width: '30%' }}>Price</label>
        <input
          type="number"
          placeholder="Price"
          value={packageData.price}
          onChange={(e) => setPackageData({ ...packageData, price: parseFloat(e.target.value) })}
          style={{ padding: '8px', width: '45%',marginLeft:'70px' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
        <input
          type="checkbox"
          checked={packageData.veg}
          onChange={(e) => setPackageData({ ...packageData, veg: e.target.checked })}
          style={{ marginRight: '10px' }}
        />
        <label>Veg</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
        <label style={{ width: '30%' }}>Rating</label>
        <input
          type="number"
          placeholder="Rating"
          value={packageData.rating}
          onChange={(e) => setPackageData({ ...packageData, rating: parseFloat(e.target.value) })}
          style={{ padding: '8px',width: '45%',marginLeft:'70px' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
        <label style={{ width: '30%'}}>Choose Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          style={{  width: '70%',paddingLeft:'110px' }}

        />
      </div>
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Create Package
      </button>
    </form>
  );
}

export default CreatePackage;
