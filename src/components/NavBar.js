import React from 'react';
import {
    NavLink
} from "react-router-dom";

const navBar = () => {
    return (
     
            <ul className="nav bg-dark p-3 mb-3">
                <NavLink className='navbar-brand text-light' to='/'  >Users & Accounts</NavLink>
                <li className="nav-item text-light">
                    <NavLink to='/about'   className="nav-link active text-light">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/users'  className="nav-link active text-light">
                        Users
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/accounts' className="nav-link active text-light">
                        Accounts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/login' className="nav-link active text-light">
                        Login
                    </NavLink>
                </li>

            </ul>
      
    )

}

export default navBar;