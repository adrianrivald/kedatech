import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Subscribe } from "../../../../components/Subscribe/Subscribe";

// Mocks
jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
    push: jest.fn(),
  }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("react-awesome-reveal", () => ({
  Fade: ({ children }: any) => <>{children}</>,
}));

describe("Subscribe Component", () => {
  it("renders heading and subheading", () => {
    render(<Subscribe />);

    expect(screen.getByRole("subscribeHeading")).toHaveTextContent(
      "Pilihan paket menarik dari kami"
    );
    expect(screen.getByRole("subscribeSubHeading")).toBeInTheDocument();
  });

  it("renders all pricing plans", () => {
    render(<Subscribe />);

    expect(screen.getByRole("planHeading1")).toHaveTextContent(
      "TIER 1 / Basic"
    );
    expect(screen.getByRole("planHeading2")).toHaveTextContent(
      "TIER 2 / Business"
    );
    expect(screen.getByRole("planHeading3")).toHaveTextContent(
      "TIER 3 / Entrepreneur"
    );
  });

  it("renders benefits and pricing", () => {
    render(<Subscribe />);

    expect(screen.getByText("Mencatat barang masuk")).toBeInTheDocument();
    expect(screen.getByText("99.000 / bulan")).toBeInTheDocument();
  });

  it("renders 'Langganan sekarang' button", () => {
    render(<Subscribe />);

    const buttons = screen.getAllByRole("subscribeButton");
    expect(buttons).toHaveLength(3);
  });
});
