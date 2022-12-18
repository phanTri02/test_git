import logo from './logo.svg';
import './App.css';
import { Course, Homepage } from './pages';
import Navbar from "../src/components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage/> */}
      <Course />
    </div>
  );
}

export default App;
