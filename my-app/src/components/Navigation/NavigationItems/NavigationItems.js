import React from "react";

import classes from "./NavigationItems.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationLink link="/" exact>
            Burger Builder
        </NavigationLink>
        {props.isAuthenticated ? <NavigationLink link="/orders">Orders</NavigationLink> : null}
        {!props.isAuthenticated ? (
            <NavigationLink link="/auth">Authenticate</NavigationLink>
        ) : (
            <NavigationLink link="/logout">Logout</NavigationLink>
        )}
    </ul>
);

export default navigationItems;
