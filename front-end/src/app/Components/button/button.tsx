"use client";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.sass";

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
}

const Button = ({
  label,
  onClick,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
      {label}
    </button>
  );
};

export default Button;
