import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div className="navbar">

        <div className="logotex" id="logotext1">
        <h4>
            Z<span id="logocol">AN</span>G
          </h4>
        </div>

        {/* Home, Catageries, Conatct, About */}

        <div className="menu">
            <ul className="navlinks" >
                <li className="navitem">
                    <Link to='/' className="navlink">
                        Home
                    </Link>
                </li>
                <li className="navitem">
                    <Link to='/products' className="navlink">
                        Products
                    </Link>
                </li>
                <li className="navitem">
                    <Link to='/Contact' className="navlink">
                        Contact
                    </Link>
                </li>
                <li className="navitem">
                    <Link to='/about' className="navlink navlink2">
                        About
                    </Link>
                </li>
                <li className="navitems navshopingcart">
                    <Link to='/search' className="navl">
                        <SearchIcon style={{ fontSize: 27 }}/>
                    </Link>
                </li>
                <li className="navitems">
                    <Link to='/cart' className="navl">
                        <ShoppingCartOutlinedIcon style={{ fontSize: 27 }}/>
                    </Link>
                </li>
                <li className="navitems">
                    <Link to='/login' className="navl">
                        <PersonIcon style={{ fontSize: 27 }}/>
                    </Link>
                </li>
            </ul>
        </div>
        
    </div>
    <div className="bottommenubar">
        <ul className="bottommenu">
          <li className="bottomnavitems">
            <Link to="/" className="bottomnavl bottomnavl-homeicon">
              <HomeRoundedIcon style={{ fontSize: 30 }}/>
            </Link>
          </li>
          <li className="bottomnavitems">
            <Link to="/products" className="bottomnavl">
              <StorefrontOutlinedIcon style={{ fontSize: 30 }}/>
            </Link>
          </li>
          <li className="bottomnavitems">
            <Link to="/contact" className="bottomnavl">
              <PermContactCalendarRoundedIcon style={{ fontSize: 30 }}/>
            </Link>
          </li>
          <li className="bottomnavitems">
            <Link to="/About" className="bottomnavl">
              <PeopleOutlineRoundedIcon style={{ fontSize: 30 }}/>
            </Link>
          </li>
        </ul>
      </div>
      </>
  )
}

export default Navbar