import React, { useState } from 'react';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Perform any additional processing if needed (e.g., validation, compression).

    // Here, you can send the file to the server using API calls or any other method.
    // For simplicity, we'll just log the file information.
    console.log(selectedFile);
  };


 const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '2px dashed #ccc',
    borderRadius: '8px',
  };

  const customFileUploadStyle = {
    display: 'inline-block',
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  };

  const uploadButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const selectedFileStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };

  const selectedImageStyle = {
    maxWidth: '200px',
    marginTop: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
    <label style={customFileUploadStyle}>
      <input type="file" onChange={handleFileChange} />
      <span>Select Photo</span>
    </label>
    <button style={uploadButtonStyle} onClick={handleUpload}>
      Upload
    </button>

    {selectedFile && (
      <div style={selectedFileStyle}>
        <h3>Selected File:</h3>
        <p>{selectedFile.name}</p>
        {selectedFile.type.startsWith('image') && (
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={selectedImageStyle} />
        )}
      </div>
    )}
  </div>
  );
};

export default PhotoUpload;