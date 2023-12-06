import React, { FC } from "react";

interface HeadingProps {
  variant?: "5xl" | "4xl" | "xl";
  title: string;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ variant, title, className }) => {
  let styleClasses: string = "";
  if (variant === "5xl") {
    styleClasses = "text-5xl font-medium tracking-tight text-black ";
  } else if (variant === "xl") {
    styleClasses = "text-xl font-medium tracking-tight text-primary_blue ";
  } else {
    styleClasses = "";
  }
  return (
    <>
      <h1 className={` ${styleClasses} ${className ? className : ""}`}>
        {title}
      </h1>
    </>
  );
};

export default Heading;
