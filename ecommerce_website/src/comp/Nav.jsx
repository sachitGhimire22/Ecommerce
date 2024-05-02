import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { MdLocalShipping } from "react-icons/md";
import "./Nav.css";
import { FaUserAlt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="header">
      <div className="top_header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping when shopping upto $1000</p>
        </div>
      </div>
      <div className="mid_header">
        <div className="logo">
          <img src="logo.webp" alt="" />
        </div>
        <div className="search_box">
          <input type="text" value="" placeholder="search" name="" id="" />
          <button>
            <IoSearch />
          </button>
        </div>
        {isAuthenticated ? (
          //logout button
          <div className="user">
            <div className="icon">
              <LuLogOut />
            </div>
            <div className="btn">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          </div>
        ) : 
        //login button
        (
          <div className="user">
            <div className="icon">
              <LuLogIn />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        )}
      </div>
      <div className="last_header">
        <div className="user_profile">
          {
            isAuthenticated ?
            <>
            <div className="icon"><FaUserCheck />

</div>
<div className="info">

            <h2>{user.name}</h2>
            <p>{user.email}</p>
</div>
            </>
            :
            <>
            <div className="icon">
            <FaUserAlt />

            </div>
            <div className="info">
              <p>Please Login</p>
            </div>
            
            </>
            
            
          }
        </div>
        <div className="nav">
<ul>
  <li><Link to='/' className="link">Home</Link></li>
  <li><Link to='/shop' className="link">Shop</Link></li>
  <li><Link to='/collection' className="link">Collection</Link></li>
  <li><Link to='/about' className="link">About</Link></li>
  <li><Link to='/contact' className="link">Contact</Link></li>
</ul>
        </div>
        <div className="offer">
          <p>flat 10% over all iphone</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
