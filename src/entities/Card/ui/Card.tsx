import React from "react";
import cls from "./Card.module.scss";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "@/shared/lib/classNames";

interface CardProps {
  className?: string;
  image?: string;
  alt?: string;
  text?: string;
  date?: string;
}

export const Card = React.memo((props: CardProps) => {
  const { className, text, image, date, alt } = props;

  return (
    <div className={classNames(cls.card, {}, [className])}>
      <div className={cls.news__card}>
        <Link href='#'>
          <Image
            className={cls.card__img}
            src={image || ""}
            width={215}
            height={145}
            alt={alt || ""}
          />
        </Link>
        <div className='pt-5'>
          <Link href='#'>
            <p className={cls.card__text}>{text}</p>
            <p className={cls.card__date}>{date}</p>
          </Link>
        </div>
      </div>
    </div>
  );
});
