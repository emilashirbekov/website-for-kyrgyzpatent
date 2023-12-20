"use client";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import cls from "./LangSwitcher.module.scss";
import { LangSwitcherProps } from "@/shared/types/types";

const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cls.dropdown}>
      <motion.div animate={open ? "open" : "closed"} className={cls.switcher}>
        <button
          onClick={() => setOpen((pv) => !pv)}
          className={cls.dropdown__btn}
        >
          <span className='font-medium text-sm'>Язык</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{
            originY: "top",
            translateX: "17%",
            zIndex: "999",
          }}
          className={cls.dropdown__option__list}
        >
          <Option setOpen={setOpen} text='🇰🇬 KG' />

          <Option setOpen={setOpen} text='🇷🇺 RU' />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }: LangSwitcherProps) => {
  const handleClick = useCallback(() => {
    if (setOpen) {
      setOpen(false);
    }
  }, []);
  return (
    <motion.li
      variants={itemVariants}
      onClick={handleClick}
      style={{ display: "flex", cursor: "pointer" }}
      className={cls.dropdown__option__item}
    >
      {Icon && (
        <motion.span variants={actionIconVariants}>
          {typeof Icon === "string" ? <span>{Icon}</span> : <Icon />}
        </motion.span>
      )}

      <span>{text}</span>
    </motion.li>
  );
};

export default LangSwitcher;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
      duration: 0.2,
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
