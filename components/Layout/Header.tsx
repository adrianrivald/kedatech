import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { ChevronRightIcon } from "../Icons";
import { Button } from "../Ui";

interface NavMenuMobileProps {
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  onClickLogo: () => void;
  pathname: string;
  visible: boolean;
}

function NavMenuMobile({
  isOpen,
  setOpen,
  onClickLogo,
  pathname,
  visible,
}: NavMenuMobileProps) {
  return (
    <div
      className={`transition-all sticky ${
        isOpen ? "top-0" : visible ? "top-0" : "-top-[6rem]"
      } w-full bg-white z-50 lg:hidden`}
    >
      <header className="lg:hidden w-full bg-white shadow-md  justify-between border-neutral-300 py-4 flex items-center mx-auto max-w-[100%] px-4">
        {/* Logo */}
        <div id="logo">
          <h1>HOME</h1>
        </div>

        <Hamburger
          toggled={isOpen}
          onToggle={() => {
            setOpen(!isOpen);
          }}
        />
      </header>
      <div
        className={`transition-all ${
          isOpen ? "h-screen" : "h-0 hidden"
        } bg-white px-4 py-4 mt-2 relative w-full`}
      >
        <nav id="menus" className="flex-col flex gap-8 text-base">
          <Link
            href="/"
            className={`hover:text-neutral-500 cursor-pointer ${
              pathname === "/" ? "font-bold text-neutral-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-neutral-500 cursor-pointer ${
              pathname.includes("/about") ? "font-bold text-neutral-500" : ""
            }`}
          >
            Perusahaan
          </Link>
        </nav>

        <div className="absolute -translate-x-1/2 left-1/2 transform w-full bottom-32 flex flex-col items-center gap-4 px-4 justify-center">
          <Link
            href="https://memos.co.id/demo"
            target="_blank"
            className="w-full"
          >
            <Button title="Coba Demo" isPrimary className="w-full" />
          </Link>
          <Button
            title="Konsultasi"
            isPrimary={false}
            className="w-full lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

interface NavMenuDesktopProps {
  pathname: string;
  isHome: boolean;
  onClickLogo: () => void;
  visible: boolean;
}

function NavMenuDesktop({
  pathname,
  isHome,
  onClickLogo,
  visible,
}: NavMenuDesktopProps) {
  return (
    <div
      className={`transition-all sticky z-50 ${
        visible ? "top-0" : "-top-[6rem]"
      }`}
    >
      <header className="h-[130px] hidden lg:flex w-full bg-white  justify-between border-neutral-300 py-4 items-center mx-auto max-w-[100%] px-16">
        {/* Logo */}
        {/* Blue curved shape */}
        {/* Blue pill shape */}
        <div className="h-full w-[400px] bg-gradient-to-b from-sky-300 to-sky-500 rounded-r-full flex items-center pl-8">
          <span className="text-white font-bold text-lg">HOME</span>
        </div>
        <div className="flex items-center gap-16">
          <nav
            id="menus"
            className="hidden lg:flex items-center gap-16 text-base"
          >
            <Link
              href="/"
              className={`hover:text-neutral-500 cursor-pointer ${
                pathname === "/" ? "font-bold text-neutral-500" : ""
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/about"
              className={`hover:text-neutral-500 cursor-pointer ${
                pathname.includes("/about") ? "font-bold text-neutral-500" : ""
              }`}
            >
              PRICING
            </Link>
            <Link
              href="/about"
              className={`hover:text-neutral-500 cursor-pointer ${
                pathname.includes("/about") ? "font-bold text-neutral-500" : ""
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right section */}
          <div id="right" className="hidden lg:flex gap-3">
            <Link href="/demo">
              <Button title="LOGIN" isPrimary className="w-[240px]" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export function Header() {
  const router = useRouter();
  const { asPath, pathname, locale } = router;
  const isHome = asPath === "/";
  const [isOpen, setOpen] = React.useState(false);

  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const onClickLogo = () => {
    router.push("/");
  };

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos, "currentScrollPos");
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <NavMenuDesktop
        pathname={pathname}
        isHome={isHome}
        onClickLogo={onClickLogo}
        visible={visible}
      />
      <NavMenuMobile
        visible={visible}
        isOpen={isOpen}
        setOpen={setOpen}
        onClickLogo={onClickLogo}
        pathname={pathname}
      />
    </>
  );
}
