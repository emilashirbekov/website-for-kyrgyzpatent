"use client";
import React from "react";
import cls from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";
import { useMenu } from "@/app/providers/MenuContext";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const pathname = usePathname();
  const { toggleMenu } = useMenu();

  return (
    <div className={cls.container}>
      <div className={cls.burgerWrapper}>
        <span onClick={toggleMenu} className={cls.burger}>
          <GiHamburgerMenu />
        </span>
        <div className={cls.title}>{pathname.split("/").pop()}</div>
      </div>
      <div className={cls.menu}>
        <div className={cls.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};
