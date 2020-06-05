import React from "react";

import classes from "./NavigationLink.css";

const navigationLink = (props) => (
    <li className={classes.NavigationLink}>
        <a href={props.link} className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>
);

export default navigationLink;
