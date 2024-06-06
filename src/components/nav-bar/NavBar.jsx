import React from 'react';
import { Link } from "react-router-dom";
import './nav-bar.sass';
import {supabase} from "../../client.js";

const NavBar = ({ session , setSession}) => {

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    setSession(null);
    sessionStorage.removeItem('token');
    if (error) {
      console.error('Sign out error', error)
    }
  }

  return (
    <>
      <div className="px-10 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">Vaite</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={'/produkti'}>Products</Link></li>
            <li>
              <Link to={'/blogs'}>Blog</Link>
            </li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><Link to={'/kontakti'}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control px-4">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          {session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={session.user?.user_metadata?.avatar_url || 'https://media.licdn.com/dms/image/D4D03AQHyO_c6pTEoCA/profile-displayphoto-shrink_800_800/0/1717090015911?e=1723075200&v=beta&t=gXDXrIhZ5__6pWzE7M6rjBHGNfWZo13alNPwxee39vs'} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link to={'/account'} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link to={'/account'}>Settings</Link></li>
                <li onClick={onSignOut}><a>Logout</a></li>
              </ul>
            </div>
          ) : (
            <Link to={'/login'} id={'login-btn'} className="btn bg-primary text-primary-content">Log in / Sign Up</Link>
          )}
        </div>
      </div>
      <hr/>
    </>
  );
}

export default NavBar;
