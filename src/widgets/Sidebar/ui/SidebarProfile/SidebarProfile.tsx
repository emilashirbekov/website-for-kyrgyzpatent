import React from "react";
import cls from "./SidebarProfile.module.css";
import Image from "next/image";
import profile from "@/shared/assets/profile.svg";
import { useMenu } from "@/app/providers/MenuContext";
import { IoMdArrowBack } from "react-icons/io";

const SidebarProfile = () => {
  const { toggleMenu } = useMenu();

  return (
    <div className={cls.user}>
      <Image
        className={cls.userImage}
        src={profile}
        alt='User image'
        width='50'
        height='50'
      />
      <div className={cls.userDetail}>
        <span className={cls.username}>Emka</span>
        <span className={cls.userTitle}>Administrator</span>
      </div>
      <div onClick={toggleMenu} className={cls.arrow}>
        <IoMdArrowBack />
      </div>
    </div>
  );
};

export default SidebarProfile;
