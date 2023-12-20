"use client";
import React from "react";
import cls from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import MobileNavigation from "./MobileNavigation";
import LangSwitcher from "@/shared/ui/LangSwitcher/LangSwitcher";
import { FiPhone, FiMail } from "react-icons/fi";
import Logo from "@/shared/assets/logo.svg";

export const Header = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleResize = () => {
    const breakpoint = 1025;
    const isWindowSmall = window.innerWidth < breakpoint;
    setIsMobile(isWindowSmall);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={cls.header}>
      <div className={cls.header__body}>
        <div className={cls.header__left}>
          <Link href='/'>
            <Image
              src={Logo}
              width={90}
              height={50}
              alt='Logo for kyrgyz patent'
            />
          </Link>
          <div className={cls.header__title}>
            <p>Кыргызпатент</p>
            <p>Госагентство по интеллектуальной собственности (ГАИС) КР</p>
          </div>
        </div>
        {isMobile ? (
          <>
            <Hamburger
              toggled={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              size={25}
              color='black'
            />
            <MobileNavigation isOpen={isOpen} />
          </>
        ) : (
          <ul className={cls.header__right}>
            <div className={cls.header__contacts}>
              <span>
                <FiPhone /> +996 500 549 238
              </span>
              <FiMail /> <span>+996 info@patent.kg</span>
            </div>
            <div className={cls.header__actions}>
              <LangSwitcher />
              <Link href='/login' className={cls.header__login}>
                Войти
              </Link>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
};
