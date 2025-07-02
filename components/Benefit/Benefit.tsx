import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Fade } from "react-awesome-reveal";

export function Benefit() {
  return (
    <div id="benefit" className="mt-8 lg:mt-32">
      <div className="mt-48 flex flex-col lg:flex-row justify-between items-center gap-16 relative">
        <Fade direction="left" triggerOnce className=" w-full lg:w-[40%]">
          <div className="flex p-4 lg:ml-36 ml-0 flex-col gap-2 items-start">
            <h2
              role="benefit1heading"
              className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full"
            >
              Otomatisasi Pencatatan Barang
            </h2>
            <p
              role="benefit1desc"
              className="mt-4 lg:mt-0 m-0 text-[20px] w-full "
            >
              Tidak perlu lagi mencatat secara manual — semua barang masuk dan
              keluar tercatat otomatis & akurat.
            </p>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className=" w-full lg:w-[40%]">
          <div className="p-24 rounded-l-full bg-primary-100">
            <Image
              role="benefit1img"
              src="/assets/images/benefit-1.svg"
              width={612}
              height={408}
              alt="benefit-1"
              className="w-full lg:-ml-32"
            />
          </div>
        </Fade>
      </div>
      <div className="mt-48 flex flex-col lg:flex-row justify-between items-center gap-16 relative">
        <Fade direction="left" triggerOnce className=" w-full lg:w-[40%]">
          <div className="flex p-4 lg:ml-36 ml-0 flex-col gap-2 items-start">
            <h2
              role="benefit2heading"
              className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full"
            >
              Pantauan Keuntungan Harian
            </h2>
            <p
              role="benefit2desc"
              className="mt-4 lg:mt-0 m-0 text-[20px] w-full "
            >
              Lihat laporan keuntungan setiap hari secara real-time untuk
              memantau performa bisnis Anda dengan lebih baik.
            </p>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className=" w-full lg:w-[40%]">
          <div className="p-24 rounded-l-full bg-primary-100">
            <Image
              role="benefit2img"
              src="/assets/images/benefit-2.svg"
              width={612}
              height={408}
              alt="benefit-2"
              className="w-full lg:-ml-32"
            />
          </div>
        </Fade>
      </div>
      <div className="mt-48 flex flex-col lg:flex-row justify-between items-center gap-16 relative">
        <Fade direction="left" triggerOnce className=" w-full lg:w-[40%]">
          <div className="flex p-4 lg:ml-36 ml-0 flex-col gap-2 items-start">
            <h2
              role="benefit3heading"
              className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full"
            >
              Pengambilan Keputusan Lebih Cepat{" "}
            </h2>
            <p
              role="benefit3desc"
              className="mt-4 lg:mt-0 m-0 text-[20px] w-full "
            >
              Dengan data yang tersaji lengkap dan rapi, Anda dapat mengambil
              keputusan strategis tanpa ragu.
            </p>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className=" w-full lg:w-[40%]">
          <div className="p-24 rounded-l-full bg-primary-100">
            <Image
              role="benefit3img"
              src="/assets/images/benefit-3.svg"
              width={648}
              height={282}
              alt="benefit-3"
              className="w-full lg:-ml-32"
            />
          </div>
        </Fade>
      </div>
      {/* <Parallax pages={4}>
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className="ml-[15%]">
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[15%]">
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[15%]">
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
}
