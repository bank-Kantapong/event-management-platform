import React, { useState } from "react";
import Modal from "./Modal";
import IconEventXFull from "@/assets/IconEventXFull";
import Button, { BUTTON_TYPE } from "./Button";
import IconNext from "@/assets/IconNext";

const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center w-full relative">
          {isRegister && (
            <div
              className="flex justify-start rotate-180 absolute cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              <IconNext width={24} height={24} />
            </div>
          )}
          <div className="flex w-full justify-center">
            <IconEventXFull width={160} height={80} />
          </div>
        </div>
        <p className="text-primary font-semibold text-lg">
          {isRegister ? "สมัครสมาชิก" : "เข้าสู่ระบบเพื่อดำเนินการต่อ"}
        </p>
        <form
          className="flex flex-col gap-6 w-full mt-6"
          onSubmit={(data) => console.log("data", data)}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-primary"
            >
              ชื่อผู้ใช้/Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full p-2.5 rounded-xl bg-white border border-gray shadow-input-box focus:outline-none placeholder:text-[#bbb] placeholder:text-sm"
              placeholder="กรอกชื่อผู้ใช้ของคุณ"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-primary"
            >
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              placeholder="กรอกรหัสผ่านของคุณ"
              className="block w-full p-2.5 rounded-xl bg-white border border-gray shadow-input-box focus:outline-none placeholder:text-[#bbb] placeholder:text-sm"
              required
            />
            {!isRegister && (
              <p
                className="flex justify-end mt-4 text-sm underline text-blue-500 cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                สมัครสมาชิก
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Button
              label={isRegister ? "สมัครสมาชิก" : "เข้าสู่ระบบ"}
              blocked
              type={BUTTON_TYPE.PRIMARY}
            />
            <Button
              label="ปิด"
              blocked
              type={BUTTON_TYPE.GHOST}
              onClick={() => {
                setIsRegister(false);
                onClose();
              }}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
