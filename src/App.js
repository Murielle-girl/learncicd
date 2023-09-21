import './App.css';
import HomePage from './component/home/HomePage';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import About from './component/about/About';

function App() {
  return (
    <div className="">
      
      <Router>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>} />
        <Route exact path="/about" element={<About></About>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
