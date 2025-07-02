import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Ui";
import { ToastContainer, toast } from "react-toastify";

export function ContactForm() {
  const form = React.useRef(null) as any;
  const { register, handleSubmit, watch, reset } = useForm<any>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const formValues = {
    name: watch("name"),
    email: watch("email"),
    message: watch("message"),
  };

  const onSubmit: SubmitHandler<any> = async () => {
    toast.success("Berhasil mengirim kontak, tunggu kabar selanjutnya", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    reset();
  };
  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="name">
          Nama
        </label>
        <input
          role="inputNameField"
          id="name"
          {...register("name", { required: true })}
          type="text"
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder="Masukkan nama Anda"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="email">
          Alamat Email
        </label>
        <input
          id="email"
          {...register("email", { required: true })}
          type="email"
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder="Masukkan alamat email Anda"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="message">
          Pesan
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder="Masukkan pesan Anda"
          rows={4}
        />
      </div>
      <Button
        role="submitButton"
        isPrimary
        title="Kirim Pesan"
        className="lg:w-[250px]"
      />
    </form>
  );
}
