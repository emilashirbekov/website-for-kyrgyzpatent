import React from "react";
import cls from "./Contacts.module.scss";
import Link from "next/link";
import { employees } from "@/shared/constants/constants";

const Contacts = () => {
  return (
    <section className={cls.contacts}>
      <div className={cls.contacts__body}>
        <div className={cls.contacts__info}>
          <h2 className={cls.contacts__info__title}>Наши сотрудники</h2>
          <p className={cls.contacts__info__desc}>
            Здесь предоставляены все сотрудники Кыргызпатента
          </p>
          <ul className={cls.contacts__nav}>
            <li className={cls.contacts__nav__item}>Все</li>
            <li className={cls.contacts__nav__item}>Директора</li>
            <li className={cls.contacts__nav__item}>Замдиректора</li>
            <li className={cls.contacts__nav__item}>Сотрудники</li>
          </ul>
        </div>
        <div className={cls.contacts__list}>
          {employees.map((el) => (
            <div key={el.id} className={cls.employee}>
              <Link href='#'>
                <img
                  className={cls.employee__img}
                  src={el.photo}
                  alt='Employee photo'
                />
              </Link>
              <div className={cls.employee__info}>
                <h3 className={cls.employee__name}>
                  <Link href='#'>{el.fullName}</Link>
                </h3>
                <span className={cls.employee__position}>{el.position}</span>
                <p className={cls.employee__rest}>{el.phoneNumber}</p>
                <p className={cls.employee__rest}>{el.email}</p>
                <p className={cls.employee__rest}>{el.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
