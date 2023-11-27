import React from "react";

import { Button, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const SubmitCampaignPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pt-20 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs w-full fixed top-0" />
        <div className="bg-black-900_99 flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtRobotoBold40WhiteA700"
            >
              Apply a New Campaign
            </Text>
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtRobotoRegular16WhiteA700"
            >
              Fill in the details below to submit your campaign
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Campaign Details
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Campaign Total Donation Limit
                </Text>
                <Input
                  name="textfield"
                  placeholder="Enter the total donation limit"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Specify the maximum amount you want to raise
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Missions
                </Text>
                <Input
                  name="textfield_One"
                  placeholder="Enter campaign missions"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Describe the goals and objectives of your campaign
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Physical Donation Location
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder="Enter the physical donation location"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Provide the address where donors can physically donate
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Physical Donation Details
                </Text>
                <Input
                  name="textfield_Three"
                  placeholder="Enter the accepted donation products"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Provide the example such as clothing.
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Organizer Name
                </Text>
                <Input
                  name="textfield_Four"
                  placeholder="Enter the organizer&#39;s name"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="text"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Specify the name of the campaign organizer
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Who is the Organizer
                </Text>
                <Input
                  name="textfield_Five"
                  placeholder="Enter details about the organizer"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Provide information about the organizer and their background
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Bank Information Details
                </Text>
                <Input
                  name="textfield_Six"
                  placeholder="Enter bank information details"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Provide bank account details for donations such as bank and
                  account number
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Who is Responsible
                </Text>
                <Input
                  name="textfield_Seven"
                  placeholder="Enter the responsible party"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Specify the person or organization responsible for the
                  campaign
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Supporting Documents and References
                </Text>
                <Input
                  name="textfield_Eight"
                  placeholder="Upload supporting documents"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Attach any necessary documents or references to validate the
                  campaign
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  size="lg"
                >
                  Submit
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

export default SubmitCampaignPagePage;
