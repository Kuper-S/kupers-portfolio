import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <>
      <Header />
      <BrowserRouter><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
      
      </BrowserRouter>
      
      <Footer />
    </>
  );
}

export default App;
