import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { IoCartOutline } from 'react-icons/io5';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../Hook/useCart';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [ cart] =useCart()

  const [showLogout, setShowLogout] = useState(false);
  const handleLogout = ()=>{
        logOut()
        setShowLogout(false)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
  }
  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };


    const navLinks = (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
         
          <li>
            <NavLink to={"/add"}>Add Food</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </>
      );
    return (
        <div className="navbar w-full text-white   mx-auto md:bg-[#615EFC] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-[#615EFC] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[10] p-2 shadow bg-[#615EFC] rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a>
          <img src={logo} className="w-32 ml-4" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu bg-[#615EFC] menu-horizontal px-5">{navLinks}</ul>
      </div>
      <div className="navbar-end mr-4">
        <div className="relative mr-4 flex justify-center items-center">
          <button className=" flex justify-center items-center">
          <Link to={'/cart'}>
            <IoCartOutline className="text-3xl text-[#7E8EF1] md:text-white" />
          </Link>
          </button>
            <div className="badge absolute md:text-black -right-2 -top-2 bg-[#7E8EF1] text-white md:bg-white p-1">+{cart.length}</div>

        </div>
        {/* {user ? (
          <button
            onClick={handleLogOut}
            className="p-2 rounded bg-orange-600 text-white"
          >
            Log Out
          </button>
        ) : (
          
        ) */}
       

        {!user ? (
          <Link to={"/login"}>
            <button className="p-2 mr-4 rounded bg-[#7E8EF1] text-white">
              Login
            </button>
          </Link>
          
        ) : (
          
            <div style={{ position: 'relative' }}>
              <img
                src={user?.photoURL} // Use user's photoURL or a placeholder
                alt="Avatar"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={toggleLogout}
              />
              {showLogout && (
                <button
                  onClick={handleLogout}
                  style={{
                    position: 'absolute',
                    top: '40px',
                    zIndex:'10',
                    left: '-15px',
                    backgroundColor: '#7E8EF1',
                    color: 'white',
                    border: 'none',
                    padding: '5px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          
        )}
      </div>
    </div>
    );
};

export default Navbar;