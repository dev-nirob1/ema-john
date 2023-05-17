import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then((result) => {})
            .catch(() => {
                console.log('Something Went Wrong')
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign Up</Link>
                {
                    user && <span className='text-white'>{user.email} <button onClick={handleSignOut}>Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;