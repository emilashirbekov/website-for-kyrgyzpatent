import { footerItems } from "@/shared/constants/constants";
import cls from "./Footer.module.scss";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footer__body}>
        {footerItems.map((item, index) => (
          <ul className={cls.footer__content} key={index}>
            <li className={cls.footer__content__item}>
              <span>{item.title}</span>
              <span>{item.phone}</span>
              <span>{item.email}</span>
            </li>
          </ul>
        ))}
        <ul className={cls.footer__images}>
          {footerItems.map((item, index) => (
            <li className={cls.footer__content__item} key={index}>
              <Image
                alt='footer image'
                width={65}
                height={65}
                src={item.imageUrl}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
