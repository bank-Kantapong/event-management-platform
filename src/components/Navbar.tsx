"use client";

import React, { useEffect, useRef, useState } from "react";
import IconEvent from "@/assets/IconEvent";
import IconHome from "@/assets/IconHome";
import IconDashboard from "@/assets/IconDashboard";
import IconProfile from "@/assets/IconProfile";
import LoginModal from "./LoginModal";
// import Home from "@/assets/home.svg";

// import { ReactComponent as event } from "@/assets/event.svg";
// import { ReactComponent as dashboard } from "@/assets/dashboard.svg";
// import IconSvg from "./IconSvg";

enum TABS {
  HOME = "home",
  EVENT_LIST = "eventList",
  DASHBOARD = "dashboard",
}

const allTabs = [
  {
    id: TABS.HOME,
    name: "หน้าแรก",
    // icon: home,
  },
  {
    id: TABS.EVENT_LIST,
    name: "รายการกิจกรรม",
    // icon: event,
  },
  {
    id: TABS.DASHBOARD,
    name: "แดชบอร์ด",
    // icon: dashboard,
  },
];

const Navbar = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState<boolean>(false);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const onChangeTab = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsProfileActive(false); // Close the component if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuIcon = ({ key, isActive }: { key: TABS; isActive: boolean }) => {
    switch (key) {
      case TABS.HOME:
        return <IconHome fill={isActive ? "white" : "var(--primary)"} />;
      case TABS.EVENT_LIST:
        return <IconEvent fill={isActive ? "white" : "var(--primary)"} />;
      case TABS.DASHBOARD:
        return <IconDashboard fill={isActive ? "white" : "var(--primary)"} />;
      default:
        break;
    }
  };

  const openModal = () => setIsOpenSignIn(true);
  const closeModal = () => setIsOpenSignIn(false);

  return (
    <div className="rounded-xl bg-white shadow-card-box px-6 py-2 h-fit">
      <ul className="flex items-center gap-4">
        {allTabs.map((tab, index) => {
          const isActive = activeTabIndex === index;
          return (
            <li
              key={tab.id}
              className="relative flex items-center justify-center cursor-pointer"
              onClick={() => {
                onChangeTab(index);
                setIsProfileActive(false);
              }}
            >
              <div
                className={`flex items-center gap-2 ${
                  isActive ? "bg-orange text-white" : "bg-transparent"
                }flex items-center justify-center w-full h-full rounded-lg px-4 py-2 transition-all duration-300`}
              >
                {menuIcon({ key: tab.id, isActive })}
                <a
                  href="#"
                  className={`relative z-10 font-semibold transition-all duration-300 ${
                    isActive ? "text-white" : "text-primary"
                  }`}
                >
                  {tab.name}
                </a>
              </div>
            </li>
          );
        })}
        <li
          className="cursor-pointer relative"
          onClick={() => setIsProfileActive((prev) => !prev)}
        >
          <IconProfile
            width={24}
            height={24}
            fill={isProfileActive ? "var(--main-orange)" : "var(--primary)"}
          />
          {isProfileActive && (
            <div
              ref={ref}
              className="flex px-4 py-2 absolute top-12 right-[-2] bg-white w-fit shadow-card-box rounded-xl text-nowrap"
              onClick={openModal}
            >
              <p className="text-primary text-base font-semibold hover:text-orange">
                Sign In
              </p>
            </div>
          )}
        </li>
      </ul>
      <LoginModal isOpen={isOpenSignIn} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
