import React from "react";

import classes from "./NavigationItems.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationLink link="/" exact>
            Burger Builder
        </NavigationLink>
        <NavigationLink link="/orders">Orders</NavigationLink>
        <NavigationLink link="/auth">Authenticate</NavigationLink>
    </ul>
);

export default navigationItems;
