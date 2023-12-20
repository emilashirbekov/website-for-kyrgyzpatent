import React from "react";
import cls from "./Login.module.scss";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className={cls.login}>
      <div className={cls.login__form}>
        <h1>Войти</h1>
        <p>
          Перед тем как пользоваться приложением пожалуйста залогинтесь, чтобы
          мы могли определить являетесь ли вы сотрудником Кыргызпатента
        </p>
        <form action=''>
          <p>Войти в ваш аккаунт </p>
          <div>
            <label htmlFor='email'>Почта</label>
            <div className='relative'>
              <input type='email' placeholder='Введите почту' />
            </div>
          </div>
          <div>
            <label htmlFor='password'>Пароль</label>
            <div className='relative'>
              <input type='password' placeholder='Введите пароль' />
            </div>
          </div>
          <button type='submit'>Войти</button>
          <p>
            Нет аккаунта ?<Link href=''>Зарегестрироваться</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
