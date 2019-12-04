import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

const navBar = (props) => {
    return (
        <div>
            <ul class="nav">
                <li className="nav-item">
                    <NavLink to='/about' className="nav-link active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/users' className="nav-link active">
                        Users
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/accounts' className="nav-link active">
                        Accounts
                    </NavLink>
                </li>
                
            </ul>
        </div>
    )

}

export default navBar;