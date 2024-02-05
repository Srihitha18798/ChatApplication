import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="bg-image">
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
