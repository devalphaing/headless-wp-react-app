import './App.css';
import Layout from './layout/Layout';
import About from './page/About';
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/about" element={<About />} />   
      </Routes>
    </Layout>
  );
}

export default App;
