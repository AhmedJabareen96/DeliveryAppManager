import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
// import './Header.css';

const Header = (props) => {
  const { username, setUsername, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { branding } = props;

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>

        <div className="row">
          <ul className="navbar nav mr-auto">
            {isLoggedIn === false ? (
              <li className="nav-item">
                <Link to="/login" className="nav-link" style={{ color: 'white' }}>
                  <i className="fa fa-plus"></i> Login
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link" style={{ color: 'white' }}>
                    <i className="fa fa-home"></i> Drivers List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link" style={{ color: 'white' }}>
                    <i className="fa fa-info-circle"></i> Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/items" className="nav-link" style={{ color: 'white' }}>
                    <i className="fa fa-info-circle"></i> Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact/add" className="nav-link" style={{ color: 'white' }}>
                    <i className="fa fa-plus"></i> Add Driver
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./stores/add" className="nav-link" style={{ color: 'white' }}>
                    <i className="fa fa-plus"></i> Add Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" style={{ color: 'white' }} onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i> Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
    branding: PropTypes.string.isRequired,
};

export default Header;
