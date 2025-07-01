import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

import { useRouter } from "next/router";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { ChevronRightIcon } from "../Icons";
import { Button } from "../Ui";
import { Dialog, Transition } from "@headlessui/react";
import { Login } from "../Login/Login";

interface NavMenuMobileProps {
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  onChangeRoute: (route: string, isMobile?: boolean) => void;
  routerSection: string;
}

function NavMenuMobile({
  isOpen,
  setOpen,
  onChangeRoute,
  routerSection,
}: NavMenuMobileProps) {
  return (
    <div
      className={`transition-all sticky top-0 w-full bg-white z-50 lg:hidden`}
    >
      <header className="lg:hidden w-full bg-white shadow-md  justify-between border-neutral-300 py-4 flex items-center mx-auto max-w-[100%] px-4">
        {/* Logo */}
        <div id="logo">
          <h1>ERP Now</h1>
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
          <div
            onClick={() => onChangeRoute("about", true)}
            className={`hover:text-neutral-500 cursor-pointer ${
              routerSection === "about" ? "font-bold text-neutral-500" : ""
            }`}
          >
            ABOUT
          </div>
          <div
            onClick={() => onChangeRoute("pricing", true)}
            className={`hover:text-neutral-500 cursor-pointer ${
              routerSection === "pricing" ? "font-bold text-neutral-500" : ""
            }`}
          >
            PRICING
          </div>

          <div
            onClick={() => onChangeRoute("benefit", true)}
            className={`hover:text-neutral-500 cursor-pointer ${
              routerSection === "benefit" ? "font-bold text-neutral-500" : ""
            }`}
          >
            BENEFIT
          </div>
          <div
            onClick={() => onChangeRoute("contact", true)}
            className={`hover:text-neutral-500 cursor-pointer ${
              routerSection === "contact" ? "font-bold text-neutral-500" : ""
            }`}
          >
            CONTACT
          </div>
        </nav>

        <div className="absolute -translate-x-1/2 left-1/2 transform w-full bottom-32 flex flex-col items-center gap-4 px-4 justify-center">
          <Button title="Konsultasi" isPrimary className="w-full lg:w-auto" />
        </div>
      </div>
    </div>
  );
}

interface NavMenuDesktopProps {
  onClickLogin: () => void;
  onChangeRoute: (route: string) => void;
  routerSection: string;
}

function NavMenuDesktop({
  onClickLogin,
  onChangeRoute,
  routerSection,
}: NavMenuDesktopProps) {
  return (
    <div className={`transition-all sticky z-50 top-0`}>
      <header className="h-[130px] hidden lg:flex w-full bg-white  justify-between border-neutral-300 py-4 items-center mx-auto max-w-[100%] px-16">
        {/* Logo */}
        {/* Blue pill shape */}
        <div className="h-full w-[400px] bg-gradient-to-b from-sky-300 to-sky-500 rounded-r-full flex items-center pl-8">
          <span className="text-white font-bold text-3xl">ERP Now</span>
        </div>
        <div className="flex items-center gap-16">
          <nav
            id="menus"
            className="hidden lg:flex items-center gap-16 text-base"
          >
            <div
              onClick={() => onChangeRoute("about")}
              className={`hover:text-neutral-500 cursor-pointer ${
                routerSection === "about" ? "font-bold text-neutral-500" : ""
              }`}
            >
              ABOUT
            </div>
            <div
              onClick={() => onChangeRoute("pricing")}
              className={`hover:text-neutral-500 cursor-pointer ${
                routerSection === "pricing" ? "font-bold text-neutral-500" : ""
              }`}
            >
              PRICING
            </div>

            <div
              onClick={() => onChangeRoute("benefit")}
              className={`hover:text-neutral-500 cursor-pointer ${
                routerSection === "benefit" ? "font-bold text-neutral-500" : ""
              }`}
            >
              BENEFIT
            </div>
            <div
              onClick={() => onChangeRoute("contact")}
              className={`hover:text-neutral-500 cursor-pointer ${
                routerSection === "contact" ? "font-bold text-neutral-500" : ""
              }`}
            >
              CONTACT
            </div>
          </nav>

          {/* Right section */}
          <div id="right" className="hidden lg:flex gap-3">
            <Button
              onClick={onClickLogin}
              title="LOGIN"
              isPrimary={false}
              className="w-[240px]"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [isOpen, setOpen] = React.useState(false);
  const [isOpenLoginPopup, setIsOpenLoginPopup] = React.useState(false);

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

  const onClickLogin = () => {
    setIsOpenLoginPopup(true);
  };

  const onChangeRoute = (route: string, isMobile?: boolean) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, section: route },
      },
      undefined,
      { scroll: false } // ❗️ prevent Next.js from resetting scroll
    );
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <>
      <NavMenuDesktop
        routerSection={router.query.section as string}
        onChangeRoute={onChangeRoute}
        onClickLogin={onClickLogin}
      />
      <NavMenuMobile
        isOpen={isOpen}
        setOpen={setOpen}
        onChangeRoute={onChangeRoute}
        routerSection={router.query.section as string}
      />

      {isOpenLoginPopup && (
        <Transition appear show={isOpenLoginPopup} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsOpenLoginPopup(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl border border-neutral-200 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Login />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
