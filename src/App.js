// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './Form';
import File from './File';
import Dropdown from './Dropdown';
import Regular from './Regular';
import Mainform from './Mainform';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/form" element={<Form />}/>
        <Route path="/file" element={<File/>}/>
        <Route path="/dropdown" element={<Dropdown/>}/>
        <Route path="/regular" element={<Regular/>}/>       
        <Route path="/" element={<Mainform/>}/>       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
