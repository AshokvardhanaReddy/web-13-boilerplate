import {Navbar} from "./components/Navbar"
import { MoviesDashboard } from "./components/MoviesDashboard";
import './App.css';
import "./components/css/navbar.css"

function App() {
  return (
    <div className="App">
      <div id="navbarDiv">
      <div id="home" className="navbar">
      <p className="navbarName">Home</p>
      </div>
      
      <div className="navbar">
      <p className="navbarName">About</p>
      </div>
      
      <div className="navbar">
      <p className="navbarName">Movies</p>
      </div>
    </div>
    </div>
  );
}

export default App;
