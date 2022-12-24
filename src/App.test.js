import { render } from "@testing-library/react";
import App from "./App";

test("'App' className has only one assertion", () => {
  render(<App />);
  const appElements = document.getElementsByClassName("App");
  expect(appElements).toHaveLength(0);
});
