import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

export function Hero() {
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
            Solusi Transformasi Digital untuk Masa Depan Layanan Kesehatan yang
            Optimal
          </h1>
          <p className="mt-4 text-base text-center lg:text-left">
            CRM Healthcare Solution Platform No. 1 di Indonesia yang
            menghadirkan sistem informasi kesehatan terintegrasi untuk layanan
            kesehatan yang lebih optimal
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
            <Link href="/demo" className="w-full lg:w-auto">
              <Button
                title="Coba Demo Gratis"
                isPrimary
                className="w-full lg:w-auto"
              />
            </Link>
            <a href="mailto:info@notes.co.id" className="w-full lg:w-auto">
              <Button
                title="Konsultasikan"
                isPrimary={false}
                className="w-full lg:w-auto"
              />
            </a>
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
