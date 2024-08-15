import React, { useState } from 'react';

function FileUpload({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:8080/packages', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      onFileUpload(data.url);  // Pass the file URL to the parent component or save it in state
    } else {
      alert('File upload failed');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} style={{backgroundColor:'green'}}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
