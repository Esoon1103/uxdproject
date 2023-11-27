import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:h-auto md:h-auto items-center justify-start mx-auto pt-20 w-[1440px] sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs w-full fixed top-0" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtRobotoBold40"
            >
              Donate to Mental Health Campaign
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Raise Funds for Disaster Relief Campign
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
              Payment Details
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Please provide your payment details.
            </Text>
            <Text
              className="leading-[24.00px] max-w-[520px] md:max-w-full text-base text-black-900 text-justify"
              size="txtRobotoRegular16"
            >
              <>
                Your donation is securely held in our website&#39;s dedicated
                payment account, ensuring confidentiality. Upon campaign
                success, funds are promptly released to the leader, reflecting
                our commitment to transparent and efficient disbursements. Thank
                you for your recent contribution!
              </>
            </Text>
            <div className="flex flex-col items-start justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-center justify-start w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Currency
                </Text>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="md"
                  >
                    USD
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="md"
                  >
                    EUR
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="md"
                  >
                    GBP
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="md"
                  >
                    AUD
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="md"
                  >
                    RMB
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="md"
                  >
                    MYR
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="md"
                  >
                    SGD
                  </Button>
                </div>
              </div>
              <Text
                className="italic ml-5 md:ml-[0] mt-[29px] text-black-900_82 text-xs w-auto"
                size="txtRobotoItalicMedium12"
              >
                Selected currency will be calculated automatically from the
                amount in the payment
              </Text>
              <div className="flex flex-col gap-1 items-start justify-center mt-[27px] w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Amount
                </Text>
                <Input
                  name="textfield"
                  placeholder="Enter donation amount"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  size="xs"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center mt-6 w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Card Number
                </Text>
                <Input
                  name="textfield_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center mt-6 w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Expiration Date
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center mt-6 w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  CVV
                </Text>
                <Input
                  name="textfield_Three"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                ></Input>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[134px] mt-6 w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                >
                  Confirm Donation
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

export default PaymentPage;
