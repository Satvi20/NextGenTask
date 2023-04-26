import React, { useState , useEffect} from "react";

function App() {
  const [selectedInput, setSelectedInput] = useState(null);
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) =>
      prevState.map((input) =>
        input.name === name ? { ...input, value } : input
      )
    );
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setInputValues((prevState) => [
      ...prevState,
      { name: "file", value: file.name },
    ]);
  };

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    setInputValues((prevState) => [
      ...prevState,
      { name: "dropdown", value },
    ]);
  };

  const handleAddInputClick = () => {
    setInputValues((prevState) => [
      ...prevState,
      { name: `input${inputValues.length + 1}`, value: "" },
    ]);
  };

  const handleDeleteInputClick = (name) => {
    setInputValues((prevState) =>
      prevState.filter((input) => input.name !== name)
    );
  };

  const handleSaveClick = () => {
    console.log(inputValues);


  };

  const renderSubform = () => {
    if (selectedInput === "file") {
      return (
        <div>
          <input type="file" onChange={handleFileInputChange} />
        </div>
      );
    } else if (selectedInput === "dropdown") {
      return (
        <div>
          <select onChange={handleDropdownChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={handleAddInputClick}>Add Input</button>
          {inputValues.map((input) => (
            <div key={input.name}>
              <input
                type="text"
                name={input.name}
                value={input.value}
                onChange={handleInputChange}
              />
              <button onClick={() => handleDeleteInputClick(input.name)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <label>
          Select an input:
          <select onChange={(event) => setSelectedInput(event.target.value)}>
            <option value="">Select an input</option>
            <option value="file">File</option>
            <option value="dropdown">Dropdown</option>
            <option value="input">Input</option>
          </select>
        </label>
      </div>
      {renderSubform()}
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default App;
