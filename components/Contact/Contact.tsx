import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div
      id="contact"
      className={twMerge(
        "bg-[url('/assets/images/contact-bg.png')] p-4 lg:p-16 mt-16 lg:mt-24 bg-no-repeat bg-left bg-auto",
        maxWidthContainer
      )}
    >
      <div className="relative flex flex-col-reverse lg:flex-row flex  gap-16 backdrop-blur-lg border border-2 rounded-xl shadow-xl p-4 lg:p-16 relative min-h-[400px] w-[100%] mx-auto">
        <Fade direction="left" triggerOnce className="w-full lg:w-[50%]">
          <div className="">
            <ContactForm />
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className="lg:w-[50%]">
          <div className="mt-12">
            <h2
              role="contactHeading"
              className="font-bold text-[24px] text-neutral-300"
            >
              Yuk tanya kami!
            </h2>
            <h3
              role="contactSubHeading"
              className="text-neutral-500 text-[32px] mt-4 font-bold"
            >
              Kirimkan Pertanyaan Anda pada Kami!
            </h3>
            <Image
              role="contactBg"
              src="/assets/images/contact-us.svg"
              width={612}
              height={408}
              alt="contact"
              className="hidden lg:block absolute right-2 bottom-2 w-1/2"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
