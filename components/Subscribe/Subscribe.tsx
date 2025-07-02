import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Fade } from "react-awesome-reveal";
import { Button } from "../Ui";
import { useRouter } from "next/router";

const plans = [
  {
    title: "TIER 1 / Basic",
    benefits: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
    price: "99.000",
  },
  {
    title: "TIER 2 / Business",
    benefits: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
    ],
    price: "199.000",
  },
  {
    title: "TIER 3 / Entrepreneur",
    benefits: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
      "Export data ke Excel",
      "AI Prediksi penghasilan",
    ],
    price: "499.000",
  },
];

export function Subscribe() {
  const router = useRouter();

  return (
    <div
      id="pricing"
      className={twMerge(
        "p-4 lg:p-16 mt-16 lg:mt-24 bg-no-repeat bg-left bg-auto",
        maxWidthContainer
      )}
    >
      <div className="flex justify-center flex-col gap-2">
        <h2
          role="subscribeHeading"
          className="text-center text-[32px] font-bold"
        >
          Pilihan paket menarik dari kami
        </h2>
        <p role="subscribeSubHeading" className="text-center w-1/2 mx-auto">
          Dengan sistem ERP kami, Anda dapat memantau stok barang, transaksi
          harian, dan keuntungan secara real-time — membantu Anda mengambil
          keputusan lebih cepat dan tepat tanpa buang waktu.
        </p>
      </div>
      <div className="mt-12 flex flex-col lg:flex-row items-start  gap-16 backdrop-blur-xl rounded-xl shadows-xl p-4 lg:p-16 relative min-h-[400px] w-[100%] mx-auto space-between">
        {plans.map((plan, index) => (
          <Fade direction="up" triggerOnce className="w-full lg:w-1/3">
            <div className="h-[600px] flex flex-col justify-between gap-8 bg-white p-8 rounded-[16px] text-neutral-500 border shadow-md min-h-[200px] hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              <div className="">
                <h2
                  role={`planHeading${index + 1}`}
                  className="text-2xl font-bold"
                >
                  {plan.title}
                </h2>
                <ol className="mt-8 flex flex-col gap-5">
                  {plan.benefits.map((benefit) => (
                    <li className="flex items-center gap-3">
                      <Image
                        src="/assets/icons/check.svg"
                        width={20}
                        height={20}
                        alt="check-list"
                      />{" "}
                      {benefit}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col gap-3">
                <div className="mt-2 font-bold">
                  <span>Rp</span>{" "}
                  <span role={`planPrice${index + 1}`} className="text-4xl">
                    {plan.price} / bulan
                  </span>
                </div>

                <Button
                  role="subscribeButton"
                  title="Langganan sekarang"
                  isPrimary={true}
                  className="w-full mt-8"
                />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
