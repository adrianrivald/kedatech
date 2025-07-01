import { createRef, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Button } from "../Ui";

export function Login() {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const { register, handleSubmit, setValue } = useForm<any>();
  const form = useRef(null) as any;

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    // TODO: login function
  };

  return (
    <div id="signup">
      <div className="">
        <div>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 className="font-bold text-[20px] lg:text-[24px]">Login</h2>
              <h3 className="mt-2">Masukkan data Anda untuk login</h3>

              <div className="flex flex-col gap-8 mt-6">
                <div className="flex flex-col gap-4">
                  {/* Row 1 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-[14px] font-medium" htmlFor="name">
                        Email
                      </label>
                      <input
                        id="email"
                        {...register("email", { required: true })}
                        type="email"
                        className="rounded-md p-[10px] border border-neutral-100 focus:outline-none"
                        placeholder="Masukkan Email Anda"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        aria-autocomplete="none"
                      />
                    </div>
                  </div>
                  {/* Row 1 */}
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-[14px] font-medium" htmlFor="name">
                        Kata Sandi
                      </label>
                      <div
                        className={`relative rounded-[8px] p-[10px] border ${
                          isWrongPassword
                            ? "border-primary-500"
                            : "border-neutral-100"
                        } flex items-center justify-between gap-2`}
                      >
                        <input
                          id="password"
                          {...register("password", { required: true })}
                          type={isHidePassword ? "password" : "text"}
                          className="focus:outline-none w-full"
                          placeholder="Masukkan Kata Sandi"
                          onChange={(e) => {
                            setIsWrongPassword(false);
                            setValue("password", e.target.value, {
                              shouldValidate: true,
                            });
                          }}
                          autoComplete="new-password"
                          autoCorrect="off"
                          spellCheck="false"
                        />

                        <img
                          onClick={() => setIsHidePassword(!isHidePassword)}
                          src={
                            !isHidePassword
                              ? "/assets/icons/eye-show.svg"
                              : "/assets/icons/eye.svg"
                          }
                          alt="showhidepassword"
                          width={16}
                          height={16}
                          className="cursor-pointer"
                        />
                      </div>

                      {isWrongPassword && (
                        <span className="text-primary-500">
                          Kata sandi salah
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p
                onClick={() => {}}
                className="mt-2 text-[14px] underline text-link cursor-pointer"
              >
                Lupa kata sandi?
              </p>
              <Button
                isPrimary
                title="Masuk"
                className={`w-full mt-4 focus:outline-none`}
                type="submit"
              />
              <div
                onClick={() => {}}
                className="mt-4 text-center cursor-pointer"
              >
                <span>
                  Belum punya akun?{" "}
                  <span className="underline text-[#037EFF]">Daftar</span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
