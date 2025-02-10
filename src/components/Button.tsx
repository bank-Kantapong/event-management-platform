import React, { ReactNode } from "react";

export enum BUTTON_TYPE {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
}

const Button = ({
  label,
  type = BUTTON_TYPE.PRIMARY,
  icon,
  blocked,
  onClick,
}: {
  label: string;
  type: BUTTON_TYPE;
  icon?: ReactNode;
  blocked?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={` px-4 py-2 ${
        type === BUTTON_TYPE.PRIMARY
          ? "bg-orange text-white"
          : type === BUTTON_TYPE.SECONDARY
          ? "bg-secondary text-white"
          : "bg-white border border-gray text-primary"
      } rounded-xl cursor-pointer font-semibold flex items-center gap-2 ${
        blocked && "w-full justify-center hover:opacity-90"
      }`}
    >
      {label}
      {icon}
    </div>
  );
};

export default Button;
