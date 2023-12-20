import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "../../lib/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { className, children } = props;
  return (
    <div className={classNames(cls.button, {}, [className])}>{children}</div>
  );
};

export default Button;
