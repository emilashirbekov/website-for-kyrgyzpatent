import { classNames } from "@/shared/lib/classNames";
import Button from "@/shared/ui/Button/Button";
import React from "react";
import cls from "./Error.module.scss";

export const Error = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.error, {}, [])}>
      <div className={classNames(cls.error__body, {}, [])}>
        <h1 className={classNames(cls.error__title, {}, [])}>Упс</h1>
        <p className={classNames(cls.error__desc, {}, [])}>
          Что то пошло не так, попробуйте перезагрузить страницу !
        </p>
        <Button
          onClick={reloadPage}
          className={classNames(cls.error__button, {}, [])}
        >
          Обновить страницу
        </Button>
      </div>
    </div>
  );
};
