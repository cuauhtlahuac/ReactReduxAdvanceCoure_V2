import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
afterEach(() => {
  wrapped.unmount();
});
it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
it("has a text area that users can type in", () => {
  // Find the textarea component . . . wrapped.find("textarea");
  // Simulate a change event, to do that, find on Enzime docs. In FULL DOM Rendering section
  // simulate(event[,data]), first arg, str name, like change event, second is a mock.
  // TIP: use a real html event name.
  // Provide a fake event object  {tarjet: { value: "new comment"}
  wrapped.find("textarea").simulate("change", {
    tarjet: { value: "new comment" }
  });
  // Force the component to update: means don't wait to asynchronous response of setState
  // To help whit that Enzime has a update method
  wrapped.update();
  // Assert that the text area value has changed, gonna use prop(key)
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});
