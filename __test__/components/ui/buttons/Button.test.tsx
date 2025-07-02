import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../../../../components/Ui";

it("Button snapshot test", () => {
  const tree = renderer
    .create(
      <Button title="Test Button" isPrimary className="w-full lg:w-auto" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Button text inside test", () => {
  render(<Button title="Test Button" isPrimary className="w-full lg:w-auto" />);
  const divElement = screen.getByRole("mainButton");
  expect(divElement).toHaveTextContent("Test Button");
});
