import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[82%]">
          <div className="flex flex-col h-[100px] md:h-auto items-center justify-center w-auto sm:w-full">
            <Text
              className="text-black-900 text-center text-xl w-full"
              size="txtRobotoRegular20"
            >
              © 2023 Charity Fundraising Platform. All rights reserved.
            </Text>
          </div>
          <Text
            className="common-pointer text-black-900 text-right text-xl w-full"
            size="txtRobotoRegular20"
            onClick={() => navigate("/adminloginpage")}
          >
            ADMIN LOGIN
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
