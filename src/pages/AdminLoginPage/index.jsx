import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";

const AdminLoginPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs w-full">
          <div className="bg-black-900_19 h-10 rounded-[50%] w-10"></div>
          <Text
            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
            size="txtRobotoMedium28"
          >
            Charity Fundraising Platform
          </Text>
          <ul className="bg-white-A700 flex flex-row gap-10 sm:hidden items-center justify-center w-auto common-row-list">
            <li>
              <a className="text-base text-black-900">
                <Text
                  className="common-pointer"
                  size="txtRobotoRegular16"
                  onClick={() => navigate("/homepage")}
                >
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a className="text-base text-black-900">
                <Text
                  className="common-pointer"
                  size="txtRobotoRegular16"
                  onClick={() => navigate("/browsecampaignspage")}
                >
                  Campaigns
                </Text>
              </a>
            </li>
            <li>
              <a className="text-base text-black-900">
                <Text
                  className="common-pointer"
                  size="txtRobotoRegular16"
                  onClick={() => navigate("/aboutpage")}
                >
                  About
                </Text>
              </a>
            </li>
            <li>
              <a className="text-base text-black-900">
                <Text
                  className="common-pointer"
                  size="txtRobotoRegular16"
                  onClick={() => navigate("/contactpage")}
                >
                  Contact
                </Text>
              </a>
            </li>
          </ul>
        </header>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Admin Login
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Please enter your credentials to log in.
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Email
                </Text>
                <Input
                  name="emailplaceholder"
                  placeholder="Enter your email"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="email"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Your email must be valid
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Password
                </Text>
                <Input
                  name="passwordplaceholder"
                  placeholder="Enter your password"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="password"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Your password must be at least 8 characters
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => navigate("/admindashboardpage")}
                  shape="round"
                  size="lg"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <footer className="flex items-center justify-center p-[60px] md:px-5 w-full">
          <div className="flex flex-col h-[100px] md:h-auto items-center justify-center w-auto">
            <Text
              className="text-black-900 text-center text-xl w-full"
              size="txtRobotoRegular20"
            >
              © 2023 Charity Fundraising Platform. All rights reserved.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdminLoginPagePage;
