import React, { useState } from 'react';

export const OpenCanvasView: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const DEVELOPER_KEY = "pobgd0xtau95eeo2xawx1wbkm11py0";   

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleUploadFile = () => {
    if (selectedFile) {
      setUploadedFile(selectedFile);
      console.log('File uploaded:', selectedFile);
    }
  };

  return (
    <div>
      <h1>Open Canvas View</h1>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '50%', height: '50%', border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUploadFile}>Upload File</button>
          {uploadedFile && (
            <div>
              <h2>{uploadedFile.name}</h2>
              <img src={URL.createObjectURL(uploadedFile)} alt={uploadedFile.name} style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};