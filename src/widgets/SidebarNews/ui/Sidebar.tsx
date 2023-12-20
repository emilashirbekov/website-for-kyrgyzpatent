import React, { memo } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames";

interface SidebarProps {
  className?: string;
  text?: string;
  date?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className, text, date } = props;
  return (
    <aside className={classNames(cls.sibebar, {}, [className])}>
      <div className={classNames(cls.sidebar__body, {}, [className])}>
        <ul className={classNames(cls.sibebar__news, {}, [className])}>
          <li className={classNames(cls.sibebar__news__item, {}, [className])}>
            <span className={classNames(cls.time, {}, [className])}>
              {date}
            </span>
            <span className={classNames(cls.text, {}, [className])}>
              {text}
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
});
