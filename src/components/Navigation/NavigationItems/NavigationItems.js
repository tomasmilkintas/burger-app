import React from "react";

import classes from "./NavigationItems.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationLink link="/" active>Burger Builder</NavigationLink>
        <NavigationLink link="/">Checkout</NavigationLink>
    </ul>
);

export default navigationItems;

