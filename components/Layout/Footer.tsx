import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import {
  FacebookRoundedIcon,
  InstagramRoundedIcon,
  LinkedInRoundedIcon,
  MailIcon,
  PhoneIcon,
  PinMapIcon,
  TwitterRoundedIcon,
} from "../Icons";

export function Footer() {
  return (
    <footer className="mb-4 border-t mt-24">
      <div
        id="footer"
        className={twMerge(
          "p-8 lg:px-16 lg:pt-24 flex flex-col lg:flex-row justify-between gap-16",
          maxWidthContainer
        )}
      >
        {/* Logo */}
        <div className="flex flex-col gap-4 lg:w-[20%]">
          <div className="h-full w-[200px] bg-gradient-to-b from-sky-300 to-sky-500 rounded-r-full flex items-center pl-8 py-4">
            <span className="text-white font-bold text-3xl">ERP Now</span>
          </div>
          <div className="font-bold text-neutral-500">
            Sosial Media
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ERP Now Instagram Acoount"
              >
                <InstagramRoundedIcon />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ERP Now LinkedIn Acoount"
              >
                <LinkedInRoundedIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Perusahaan */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">Perusahaan</div>
          <Link href="/">Tentang</Link>
        </div>

        {/* Produk */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">Product</div>
          <Link href="/" target="_blank" rel="noopener noreferrer">
            Pricing
          </Link>
          <Link href="/" target="_blank" rel="noopener noreferrer">
            Benefit
          </Link>
        </div>

        {/* Pengetahuan */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">Wawasan</div>
          <Link href="/" target="_blank">
            Artikel
          </Link>
          <Link href="/" target="_blank" className="cursor-pointer">
            FAQ
          </Link>
          {/* <Link href="/">{t("footer.privacy")}</Link>
          <Link href="/">{t("footer.terms")}</Link> */}
        </div>

        {/* Kontak */}
        <div className="flex flex-col gap-4 lg:w-[30%]">
          <div className="font-bold">Kontak</div>
          <div className="flex items-start gap-4">
            <PhoneIcon className="w-4 flex-none mt-1" />
            <span>+62 812-812-812</span>
          </div>
          <div className="flex items-start gap-4">
            <PinMapIcon className="w-4 flex-none mt-1" />
            <span>Jl. Thamrin no.1</span>
          </div>
          <div className="flex items-start gap-4">
            <MailIcon className="w-4 flex-none mt-1" />
            <span>info@erpnow.co.id</span>
          </div>
        </div>
      </div>
      <div
        id="copyright"
        className={twMerge(
          "flex justify-center w-full p-8 ",
          maxWidthContainer
        )}
      >
        <span className="text-neutral-400">2025 All rights reserverd</span>
      </div>
    </footer>
  );
}
