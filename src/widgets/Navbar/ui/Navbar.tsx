import React from "react";
import cls from "./Navbar.module.scss";
import Link from "next/link";
import { navItems } from "@/shared/constants/constants";

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.navbar__body}>
        <ul className={cls.navbar__list}>
          {navItems.map((item, index) => (
            <li key={index} className={cls.navbar__list__item}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
