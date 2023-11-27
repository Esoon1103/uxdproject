import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-lg" };
const variants = {
  outline: { black_900: "border border-black-900 border-solid text-black-900" },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    black_900_19: "bg-black-900_19 text-black-900",
    black_900_0c: "bg-black-900_0c text-black-900",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = { xs: "py-0.5", sm: "p-1", md: "p-[9px]", lg: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "white_A700",
    "black_900_19",
    "black_900_0c",
  ]),
};

export { Button };
