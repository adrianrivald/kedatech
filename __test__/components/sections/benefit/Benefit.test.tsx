import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import renderer from "react-test-renderer";
import { Benefit } from "../../../../components/Benefit/Benefit";

it("Benefit snapshot test", () => {
  const tree = renderer.create(<Benefit />).toJSON();
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

test("Benefit text inside test", () => {
  render(<Benefit />);

  // Benefit 1

  // Heading 1
  const benefit1headingEl = screen.getByRole("benefit1heading");
  expect(benefit1headingEl).toHaveTextContent("Otomatisasi Pencatatan Barang");
  // Desc 1
  const benefit1descEl = screen.getByRole("benefit1desc");
  expect(benefit1descEl).toHaveTextContent(
    "Tidak perlu lagi mencatat secara manual — semua barang masuk dan keluar tercatat otomatis & akurat."
  );
  // Image 1
  const benefit1imgEl = screen.getByRole("benefit1img");
  expect(benefit1imgEl).toHaveAttribute("src", "/assets/images/benefit-1.svg");

  // Benefit 2

  // Heading 2
  const benefit2headingEl = screen.getByRole("benefit2heading");
  expect(benefit2headingEl).toHaveTextContent("Pantauan Keuntungan Harian");
  // Desc 2
  const benefit2descEl = screen.getByRole("benefit2desc");
  expect(benefit2descEl).toHaveTextContent(
    "Lihat laporan keuntungan setiap hari secara real-time untuk memantau performa bisnis Anda dengan lebih baik."
  );
  // Image 2
  const benefit2imgEl = screen.getByRole("benefit2img");
  expect(benefit2imgEl).toHaveAttribute("src", "/assets/images/benefit-2.svg");

  // Benefit 3

  // Heading 3
  const benefit3headingEl = screen.getByRole("benefit3heading");
  expect(benefit3headingEl).toHaveTextContent(
    "Pengambilan Keputusan Lebih Cepat"
  );
  // Desc 3
  const benefit3descEl = screen.getByRole("benefit3desc");
  expect(benefit3descEl).toHaveTextContent(
    "Dengan data yang tersaji lengkap dan rapi, Anda dapat mengambil keputusan strategis tanpa ragu."
  );
  // Image 3
  const benefit3imgEl = screen.getByRole("benefit3img");
  expect(benefit3imgEl).toHaveAttribute("src", "/assets/images/benefit-3.svg");
});
