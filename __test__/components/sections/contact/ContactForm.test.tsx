import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import "@testing-library/jest-dom";
import { ContactForm } from "../../../../components/Contact/ContactForm";

describe("ContactForm", () => {
  beforeEach(() => {
    render(
      <>
        <ContactForm />
        <ToastContainer />
      </>
    );
  });

  it("shows validation errors when submitting empty form", async () => {
    const submitButton = screen.getByRole("submitButton");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole("inputNameField")).toHaveValue("");
    });
  });

  it("submits the form and shows success toast", async () => {
    fireEvent.change(screen.getByPlaceholderText("Masukkan nama Anda"), {
      target: { value: "Adrian Rivaldy" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Masukkan alamat email Anda"),
      {
        target: { value: "adrianrivaldy@gmail.com" },
      }
    );
    fireEvent.change(screen.getByPlaceholderText("Masukkan pesan Anda"), {
      target: { value: "Tes pesan..." },
    });

    fireEvent.click(screen.getByRole("submitButton"));

    // Wait for toast
    await waitFor(() => {
      expect(
        screen.getByText(/berhasil mengirim kontak, tunggu kabar selanjutnya/i)
      ).toBeInTheDocument();
    });

    // Confirm form reset
    await waitFor(() => {
      expect(screen.getByPlaceholderText("Masukkan nama Anda")).toHaveValue("");
      expect(
        screen.getByPlaceholderText("Masukkan alamat email Anda")
      ).toHaveValue("");
      expect(screen.getByPlaceholderText("Masukkan pesan Anda")).toHaveValue(
        ""
      );
    });
  });
});
