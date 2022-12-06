import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages';
import Navbar from "../src/components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
    </div>
  );
}

export default App;
