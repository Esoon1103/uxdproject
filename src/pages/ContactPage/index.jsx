import React from "react";

import { Button, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pt-20 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs w-full fixed top-0" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Contact Us
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Your Name
                </Text>
                <Input
                  name="textfield"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Email
                </Text>
                <Input
                  name="textfield_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Message
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Footer className="flex gap-[60px] items-center justify-center p-[60px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPagePage;
