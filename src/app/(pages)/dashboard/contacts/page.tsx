import Link from "next/link";
import React from "react";
import Image from "next/image";
import cls from "./Contacts.module.css";
import { employees } from "@/shared/constants/constants";

const Contacts = () => {
  return (
    <section className={cls.container}>
      <div className={cls.employees}>
        {employees.map((el) => (
          <div className='max-w-sm bg-white border rounded-xl'>
            <Link href='#'>
              <Image
                className='rounded-xl'
                src={el.photo}
                alt=''
                width={350}
                height={300}
              />
            </Link>
            <div className='p-5'>
              <Link href='#'>
                <h5 className='mb-2 text-2xl font-bold text-blue '>
                  {el.fullName}
                </h5>
              </Link>
              <ul>
                <li className='mb-3 font-normal text-blue'>
                  <p>{el.email}</p>
                  <p>{el.position}</p>
                  <p>{el.department}</p>
                  <p>{el.phoneNumber}</p>
                </li>
              </ul>

              <Link
                href='#'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue'
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
