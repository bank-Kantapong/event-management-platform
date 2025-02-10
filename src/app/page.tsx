import IconNext from "@/assets/IconNext";
import Button, { BUTTON_TYPE } from "@/components/Button";
import Image from "next/image";
import calendar from "@/assets/calendar.png";
import EventCard from "@/components/EventCard";
import { popularEvent } from "@/mockData";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <div className="flex gap-1">
            <p className="text-primary text-3xl font-bold">
              ค้นหากิจกรรมที่น่าสนใจ
            </p>
            <p className="text-orange text-3xl font-bold">ในช่วงนี้</p>
          </div>
          <p className="text-secondary text-2xl">
            ค้นหา, ลงทะเบียน หรือจัดการกิจกรรมได้ในไม่กี่คลิก
            พร้อมระบบจัดการที่ใช้งานง่ายในที่เดียว
          </p>
          <div className="flex gap-4 mt-6">
            <Button
              label="ดูรายการกิจกรรม"
              type={BUTTON_TYPE.PRIMARY}
              icon={<IconNext fill="white" />}
            />
            <Button
              label="เริ่มต้นจัดการกิจกรรม"
              type={BUTTON_TYPE.SECONDARY}
            />
          </div>
        </div>
        <Image src={calendar} alt="calendar" width={200} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-primary text-lg">
          รายการกิจกรรมยอดนิยม
        </p>
        <div className="flex gap-4 items-center">
          {popularEvent.map((eventItem) => (
            <EventCard
              key={eventItem.id}
              cover={eventItem.cover}
              title={eventItem.title}
              startDate={eventItem.startDate}
              endDate={eventItem.endDate}
              eventType={eventItem.eventType}
              price={eventItem.price}
              location={eventItem.location}
              totalUser={eventItem.totalUser}
            />
          ))}
          <div className="flex items-center flex-col gap-4 ms-10 cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-card-box">
              <IconNext width={32} height={32} />
            </div>
            <p className="text-sm text-secondary">กิจกรรมเพิ่มเติม</p>
          </div>
        </div>
      </div>
    </div>
  );
}
