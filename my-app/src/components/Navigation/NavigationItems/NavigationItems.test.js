import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationLink from "./NavigationLink/NavigationLink";

configure({ adapter: new Adapter() });

//description of your test
describe("<NavigationItems /> testing", () => {
    let wrapper;
    beforeEach(() => {
        //pass in the jsx
        wrapper = shallow(<NavigationItems />);
    });

    it("it should render 2 <NavigationItems /> elements if not authenticated", () => {
        //define what we expect to happen... not in jsx
        expect(wrapper.find(NavigationLink)).toHaveLength(2);
    });

    it("it should render 3 <NavigationItems /> elements if authenticated", () => {
        // hard-coded alternative
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationLink)).toHaveLength(3);
    });

    it("it should render <NavigationLink /> element logout if authenticated", () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(<NavigationLink link="/logout">Logout</NavigationLink>)).toEqual(
            true
        );
    });
});
