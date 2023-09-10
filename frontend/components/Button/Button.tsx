import React, { FC } from "react";

interface ButtonProps {
  type?: string;
  variant?: "primary" | "secondary";
  title: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  form?: string;
}

const Button: FC<ButtonProps> = ({
  type,
  variant,
  title,
  className,
  onClick,
  form,
}) => {
  let styleClasses: string = "";
  if (variant === "primary") {
    styleClasses = "bg-primary_blue py-2  rounded-lg cursor-pointer";
  } else if (variant === "secondary") {
    styleClasses =
      "py-[9px] px-[18px] w-max text-sm rounded-lg bg-[#DB1C1C] text-[var(--white)] rounded-[10px]";
  } else {
    styleClasses = "py-[9px] px-[18px] w-max text-sm rounded-lg";
  }
  return (
    <>
      <button
        className={` ${styleClasses} ${className ? className : ""}`}
        onClick={onClick}
        type={
          type === "submit"
            ? "submit"
            : type === "button"
            ? "button"
            : undefined
        }
        form={form}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
