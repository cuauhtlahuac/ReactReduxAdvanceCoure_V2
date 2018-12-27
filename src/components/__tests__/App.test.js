import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
//to run the test: npm run test
it("shows a comment box", () => {
  const div = document.createElement("div");

  reactDOM.render(<App />, div);

  // look inside the div
  // and checks to see if the CommentBox is in there
  console.log(div.innerHTML);
  ReactDOM.unmountComponentAtNode(div);
});
