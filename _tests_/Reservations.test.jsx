import React from "react";
import ReactDOM from "react-dom";
import Reservations from "../components/Reservations";

import { shallow, mount } from "enzyme";

describe("main reservation component", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Reservations />);

    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should recieve four card components", () => {
    const wrapper = mount(<Reservations />);
    expect(wrapper.find("Card").length).toBe(4);
  });

  it("should handle updating adult count", () => {
    const wrapper = mount(<Reservations />);

    wrapper
      .instance()
      .handleChange({ target: { value: 1 } }, "adults", 2, true);

    expect(wrapper.state().rooms[2].adults).toBe(1);
  });

  it("should handle updating children count", () => {
    const wrapper = mount(<Reservations />);

    wrapper
      .instance()
      .handleChange({ target: { value: 1 } }, "children", 3, true);

    expect(wrapper.state().rooms[3].children).toBe(1);
  });

  it("should handle selecting a room", () => {
    const wrapper = mount(<Reservations />);

    wrapper
      .instance()
      .handleChange({ target: { value: 1 } }, "largestRoom", 1, true);

    expect(wrapper.state().largestRoom).toBe(1);

    wrapper
      .instance()
      .handleChange({ target: { value: 3 } }, "largestRoom", 3, true);

    expect(wrapper.state().largestRoom).toBe(3);
  });

  it("should handle deselecting a room", () => {
    const wrapper = mount(<Reservations />);

    wrapper
      .instance()
      .handleChange({ target: { value: 1 } }, "largestRoom", 1, false);

    expect(wrapper.state().largestRoom).toBe(0);

    wrapper
      .instance()
      .handleChange({ target: { value: 3 } }, "largestRoom", 3, false);

    expect(wrapper.state().largestRoom).toBe(2);
  });

  // it("should call handleSubmit when submit is clicked", () => {
  //   const wrapper = shallow(<Reservations />);

  //   const spy = jest.spyOn(wrapper.instance(), "handleSubmit");

  //   console.log(wrapper.find("button").length);
  //   wrapper.find(".submit").simulate("click");

  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
});
