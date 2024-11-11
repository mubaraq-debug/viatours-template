import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
