import Image from "next/image";
import React from "react";
import IconLocation from "@/assets/IconLocation";
import IconUser from "@/assets/IconUser";
import Button, { BUTTON_TYPE } from "./Button";

interface EventCardType {
  cover: string;
  title: string;
  startDate: string;
  endDate: string;
  eventType: string;
  price?: number;
  location: string;
  totalUser: number;
}

const EventCard = ({
  cover,
  title,
  startDate,
  endDate,
  eventType,
  price,
  location,
  totalUser,
}: EventCardType) => {
  return (
    <div className="w-fit h-full rounded-xl bg-white shadow-card-box cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col">
      <Image
        src={cover}
        alt="event_cover"
        width={265}
        height={220}
        className="rounded-tl-xl rounded-tr-xl object-cover w-auto h-auto"
        priority
      />
      <div className="flex flex-col p-4 flex-1">
        <div className="flex flex-col flex-1">
          <p className="text-lg font-semibold text-left text-primary">
            {title}
          </p>
          <p className="text-xs text-left text-secondary">
            {startDate} - {endDate}
          </p>
          <p className="text-xs text-left text-secondary">#{eventType}</p>
          <div className="flex gap-2 items-center my-4">
            <IconLocation />
            <p className="text-xs text-left text-secondary">{location}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex justify-between items-center">
            {price ? (
              <p className="text-sm font-semibold text-orange">
                ราคา {price.toLocaleString()} บาท
              </p>
            ) : (
              <p className="text-sm font-semibold text-orange">ฟรี</p>
            )}
            <div className="flex gap-2 items-center">
              <IconUser />
              <p className="text-xs text-left text-secondary">
                {totalUser.toLocaleString()}
              </p>
            </div>
          </div>
          <Button type={BUTTON_TYPE.PRIMARY} label="ลงทะเบียน" blocked />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
