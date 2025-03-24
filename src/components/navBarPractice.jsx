import './navBarPractice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from '../pages/Calculator';

const NavBarPractice = () => {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <div className='nav-title'>
            <FontAwesomeIcon icon={faHouse} />
            <h4>My First Project</h4>
          </div>
          <div className='nav-links'>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/about'>About</Link></div>
            <div><Link to='/services'>Services</Link></div>
            <div><Link to='/contact'>Contact</Link></div>
            <div><Link to='/calculator'>Calculator</Link></div>
          </div>
        </nav>
        <Routes>
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBarPractice;
