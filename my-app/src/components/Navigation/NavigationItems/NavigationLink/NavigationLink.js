import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./NavigationLink.css";

const navigationLink = (props) => (
    <li className={classes.NavigationLink}>
        <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationLink;
