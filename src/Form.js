import React , {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router';

export default function Form() {
  const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedValue) {
      // window.location.href = selectedValue;
      navigate(selectedValue);

    }
  }, [selectedValue]);

  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
  }
  return (

    <div className='container shadow my-2'>
      <form className='shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h1 className='my-5'>Main Form</h1>
        <hr />
    <div class="form-group">
    <h5 for="exampleInputEmail1">File Input</h5><br />
    <Link to="/file"><button type="button" class="btn btn-primary btn">Large button</button></Link>
    </div>
    <hr />
    <div class="form-group">
    <h5 for="exampleInputPassword1">Dropdown</h5><br />
    <Link to="/dropdown"><button type="button" class="btn btn-primary btn">Large button</button></Link>
    </div>
    <hr />
    <div class="form-group">
    <h5 for="exampleInputPassword1">Regular</h5><br />
    <Link to="/regular"><button type="button" class="btn btn-primary btn">Large button</button></Link>
    </div>
    <hr />
    <h5 for="fname">Nature of Query</h5>
    <select value={selectedValue} onChange={handleSelectChange}>
      <option value="">-- Select a page --</option>
      <option value="/file">Upload a File</option>
      <option value="/dropdown">Select from Dropdown</option>
      <option value="/regular">Regular</option>
    </select>
    </form>
    </div>
  )
}
