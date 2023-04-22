import React  ,{useState} from 'react'
import { Link } from 'react-router-dom';
export default function Regular() {
    const [inputs, setInputs] = useState(['']);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddField = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveField = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const [value, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', value);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Regular</h1>
      <form className='shadow-lg p-3 mb-5 bg-white rounded container'>
  {/* <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div> */}

<div>
      {inputs.map((value, index) => (
        <div key={index}>
            {/* <button onClick={handleAddField}>Add Field</button> */}
            <hr style={{border:'2px solid black'}}/>
            <button type="button" onClick={handleAddField} class="btn btn-primary btn my-3">Add Field</button>

            <br />
          {/* <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          /> */}
           <div class="form-group container">
          <label for="exampleFormControlTextarea1">Text</label>
           {/* <textarea class="form-control" value={value} onChange={(e) => handleInputChange(index, e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea> */}
           <input type="text" class="form-control" value={value} onChange={(e) => handleInputChange(index, e.target.value)}  placeholder="Write anything"></input>
           {/* <input type="text" class="form-control" value={value} onChange={handleChange} placeholder="Write anything"></input> */}
          </div>
          
          {/* <button onClick={() => handleRemoveField(index)}>Remove</button> */}
          <button type="button" onClick={() => handleRemoveField(index)} class="btn btn-primary btn my-3">Remove</button>
          <br />
          <br />
        </div>
      ))}
    </div>
    {/* <Link to="/"><button type="button" class="btn btn-success btn my-3">Large button</button></Link> */}
    </form>
    {value && <p>You entered: {value}</p>}

    </div>
  )
}
