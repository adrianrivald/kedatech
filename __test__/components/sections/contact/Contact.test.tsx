import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import renderer from "react-test-renderer";
import { Contact } from "../../../../components/Contact/Contact";

it("Benefit snapshot test", () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("Contact element test", () => {
  render(<Contact />);

  const contactHeadingEl = screen.getByRole("contactHeading");
  expect(contactHeadingEl).toHaveTextContent("Yuk tanya kami!");

  const contactSubHeadingEl = screen.getByRole("contactSubHeading");
  expect(contactSubHeadingEl).toHaveTextContent(
    "Kirimkan Pertanyaan Anda pada Kami!"
  );

  const contactBgEl = screen.getByRole("contactBg");
  expect(contactBgEl).toHaveAttribute("src", "/assets/images/contact-us.svg");
});
