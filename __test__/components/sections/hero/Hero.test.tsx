import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import renderer from "react-test-renderer";
import { Hero } from "../../../../components";
import { useRouter } from "next/router";

it("Hero snapshot test", () => {
  const tree = renderer.create(<Hero />).toJSON();
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

// Mock the next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  pathname: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  asPath: "/",
});

test("Hero test", () => {
  render(<Hero />);

  const heroHeadingEl = screen.getByRole("heroHeading");
  expect(heroHeadingEl).toHaveTextContent(
    "Biar Sistem yang Catat, Anda Fokus Berkembang."
  );

  const heroDescEl = screen.getByRole("heroDesc");
  expect(heroDescEl).toHaveTextContent(
    "Kelola stok, pantau arus barang, dan catat keuntungan harian secara otomatis dalam satu platform. Sistem ERP modern kami dirancang khusus untuk membantu pengusaha mengelola operasional bisnis dengan lebih efisien, tanpa perlu repot mencatat manual."
  );

  const heroButtonEl = screen.getByRole("heroButton");
  expect(heroButtonEl).toHaveTextContent("Konsultasikan");
});
