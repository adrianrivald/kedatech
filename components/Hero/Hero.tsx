import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";
import { useRouter } from "next/router";

export function Hero() {
  const router = useRouter();
  const onConsult = () => {
    router.push({
      query: {
        section: "contact",
      },
    });
  };
  return (
    <div
      id="hero"
      className={twMerge(
        "flex flex-col lg:flex-row flex-col-reverse justify-between items-center min-h-[400px] gap-4 lg:gap-16 p-4 lg:p-0",
        maxWidthContainer
      )}
    >
      {/* Our Words */}
      <Fade direction="left" triggerOnce>
        <div id="our-words" className="lg:px-16 lg:max-w-[40rem]">
          <h1 className="text-[32px] font-bold text-center lg:text-left">
            Biar Sistem yang Catat, Anda Fokus Berkembang.
          </h1>
          <p className="mt-4 text-base text-center lg:text-left">
            Kelola stok, pantau arus barang, dan catat keuntungan harian secara
            otomatis dalam satu platform. Sistem ERP modern kami dirancang
            khusus untuk membantu pengusaha mengelola operasional bisnis dengan
            lebih efisien, tanpa perlu repot mencatat manual.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
            <Button
              onClick={onConsult}
              title="Konsultasikan"
              isPrimary
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </Fade>

      {/* Hero image */}
      <Fade direction="right" triggerOnce className="w-full lg:w-1/2">
        <Image
          src="/assets/images/bg-hero.png"
          width={591}
          height={620}
          alt="doctor"
          className="w-full"
        />
      </Fade>
    </div>
  );
}
