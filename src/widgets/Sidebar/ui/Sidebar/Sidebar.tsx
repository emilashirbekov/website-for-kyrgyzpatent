"use client";
import React from "react";
import cls from "./Sidebar.module.css";
import { MdLogout } from "react-icons/md";
import Button from "@/shared/ui/Button/Button";

import { useMenu } from "@/app/providers/MenuContext";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import SidebarItem from "../SidebarItem/SidebarItem";

export const Sidebar = () => {
  const { isMenuOpen } = useMenu();

  return (
    <div className={`${isMenuOpen ? cls.open : cls.container}`}>
      <SidebarProfile />
      <SidebarItem />
      <Button className={cls.logout}>
        <MdLogout /> Выйти
      </Button>
    </div>
  );
};

export default Sidebar;
