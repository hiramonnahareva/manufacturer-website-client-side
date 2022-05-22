import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/about'>My Protfolio</NavLink></li>
        <li><NavLink to='/appoinment'>Our Team</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='reviews'>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 text-xl px-8 sticky top-0 z-10">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <NavLink className='text-2xl font-serif font-bold text-primary' to='/'>Parts</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    {menuItems}
                </ul>
            </div>
           {
               user ?  <li><NavLink to='/login'><button onClick={() => logOut()} className='btn btn-primary mx-2'>SignOut</button></NavLink></li> : <li><NavLink to='/login'><button className='btn btn-primary mx-2'>Login</button></NavLink></li>
           }
        </div>
    );
};

export default Navbar;