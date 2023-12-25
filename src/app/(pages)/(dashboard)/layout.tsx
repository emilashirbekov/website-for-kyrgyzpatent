import React from "react";
import cls from "./dashboard.module.css";
import { MenuProvider } from "@/app/providers/MenuContext";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

const Layout = ({ children }: any) => {
  return (
    <MenuProvider>
      <div className={cls.container}>
        <div className={cls.menu}>
          <Sidebar />
        </div>
        <div className={cls.content}>
          <Navbar />
          {children}
        </div>
      </div>
    </MenuProvider>
  );
};

export default Layout;
