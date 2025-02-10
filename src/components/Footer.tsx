import IconEmail from "@/assets/IconEmail";
import IconLine from "@/assets/IconLine";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 w-full px-6 py-6 bg-primary">
      <div className="flex flex-col">
        <p className="text-lg text-white font-semibold">Event X</p>
        <p className="text-sm text-white">
          แพลตฟอร์มจัดการกิจกรรมที่ครบวงจร ให้คุณค้นหาและจัดการกิจกรรมได้ง่ายๆ
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-lg text-white font-semibold">ติดต่อเรา</p>
        <div className="flex items-center gap-2 mb-2">
          <IconEmail fill="white" />
          <p className="text-sm text-white">kantapong40202@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <IconLine fill="white" />
          <p className="text-sm text-white">mairoo00</p>
        </div>
      </div>
      <p className="text-sm text-white">
        &copy; 2025 Event Platform. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
