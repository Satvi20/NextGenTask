import React  , { useState }from 'react'

export default function File() {
    
    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
    }
  };


  return (
    <div>
      <div className='container my-5'>
      <input type="file" onChange={handleFileChange} />
      {file}
    </div>
    </div>
  )
}
