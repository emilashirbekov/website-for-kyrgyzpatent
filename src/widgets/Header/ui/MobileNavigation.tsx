import { navItems } from "@/shared/constants/constants";
import cls from "./MobileNavigation.module.scss";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import LangSwitcher from "@/shared/ui/LangSwitcher/LangSwitcher";
import Button from "@/shared/ui/Button/Button";

interface MobileNavigationProps {
  isOpen: boolean;
}

const MobileNavigation = ({ isOpen }: MobileNavigationProps) => {
  return (
    <div className={isOpen ? cls.mobile : cls.hide}>
      <div className={cls.mobile__body}>
        {navItems.map((item, index) => (
          <li key={index} className={cls.mobile__list__item}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <ul className={cls.mobile__email}>
          <p>
            <FiPhone /> +996 500 549 238
          </p>
          <p>
            <FiMail /> +996 info@patent.kg
          </p>
          <div className={cls.mobile__actions}>
            <LangSwitcher />
            <Button className={cls.mobile__actions__login}>Войти</Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
