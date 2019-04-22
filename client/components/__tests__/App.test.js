import React from "react";
import {render} from "react-testing-library";
import App from "../App";

document.documentElement.setAttribute("dir", "ltr");

test("it renders the heading", () => {
  const {getByText} = render(<App />)
  getByText("Basic LTI App");
});