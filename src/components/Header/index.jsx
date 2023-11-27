import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div
          className="common-pointer bg-black-900_19 h-10 rounded-[50%] w-10"
          onClick={() => navigate("/homepage")}
        ></div>
        <Text
          className="common-pointer flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
          size="txtRobotoMedium28"
          onClick={() => navigate("/homepage")}
        >
          Charity Fundraising Platform
        </Text>
        <ul className="bg-white-A700 flex sm:flex-col flex-row gap-10 sm:hidden items-center justify-center w-auto sm:w-full common-row-list">
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/homepage")}
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/browsecampaignspage")}
            >
              Campaigns
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/aboutpage")}
            >
              About
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/contactpage")}
            >
              Contact
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/adminloginpage")}
            >
              Admin Login
            </Text>
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
