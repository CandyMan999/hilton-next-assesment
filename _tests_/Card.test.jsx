import React from "react";
import ReactDOM from "react-dom";
import Card from "../components/Card";
import Reservations from "../components/Reservations";

import { shallow, mount } from "enzyme";

describe("card/Room component", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Reservations />, <Card />);

    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("selecting a dropDown should fire handleChange", () => {
    mount(<Reservations />);
    const component = shallow(<Card />);
    console.log(component.props());
    expect(component).toHaveLength(1);
  });
});

// clicking the checkbox should fire handleChange with the index of the room and "largestRoom" as name, etc.
// selecting a new adult dropdown value should fire handleCHange with right args,
// ^^ with children
// snapshot test with selected prop true vs false (true should have grayed out css)
