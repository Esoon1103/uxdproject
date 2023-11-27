import React from "react";

const sizeClasses = {
  txtRobotoMedium28: "font-medium font-roboto",
  txtRobotoItalicMedium12: "font-medium font-roboto italic",
  txtRobotoRegular16Black9007f: "font-normal font-roboto",
  txtRobotoBold40: "font-bold font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular12Black9007f: "font-normal font-roboto",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoRegular16WhiteA700: "font-normal font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoMedium14: "font-medium font-roboto",
  txtRobotoBold40WhiteA700: "font-bold font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
