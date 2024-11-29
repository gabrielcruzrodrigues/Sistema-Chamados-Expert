"use client";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.sass";

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({
  label,
  onClick,
  disabled = false,
  children,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={styles.btn}
      onClick={onClick}
      disabled={disabled}>
      {children}
      {label}
    </button>
  );
};

export default Button;
