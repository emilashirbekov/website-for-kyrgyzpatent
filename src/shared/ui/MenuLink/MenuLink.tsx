import React from "react";
import cls from "./MenuLink.module.css";
import Link from "next/link";

interface MenuLinkProps {
  href: string;
  label: string;
  icon: string;
}

const MenuLink = (item: MenuLinkProps) => {
  const { href, label, icon } = item;
  return (
    <Link href={href} className={`${cls.container}`}>
      <span className='text-xl'> {icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default MenuLink;
