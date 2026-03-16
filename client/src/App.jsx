import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Training from './pages/Training';
import Motivation from './pages/Motivation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/training" element={<Training />} />
          <Route path="/motivation" element={<Motivation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;