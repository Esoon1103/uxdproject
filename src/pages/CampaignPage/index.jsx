import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const CampaignPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pt-20 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs w-full fixed top-0" />
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtRobotoBold40"
                >
                  Support our Mental Health Campaign
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Help us raise funds to support mental health initiatives.
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                    onClick={() => navigate("/paymentpage")}
                    shape="round"
                    size="lg"
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
              <Img
                className="flex-1 h-[400px] max-h-[400px] sm:w-[] md:w-[]"
                src="images/img_imagecontainer_blue_gray_100.svg"
                alt="imagecontainer"
              />
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  Campaign Details
                </Text>
              </div>
              <List
                className="flex flex-1 flex-col gap-10 items-center py-5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_imagecontainer.svg"
                      alt="imagecontainer"
                    />
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-full"
                        size="txtRobotoMedium20"
                      >
                        Campaign Mission
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Our mission is to provide accessible mental health
                        resources to individuals in need. Your donation will
                        help us reach more people and make a positive impact on
                        their well-being.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_imagecontainer.svg"
                      alt="imagecontainer"
                    />
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-full"
                        size="txtRobotoMedium20"
                      >
                        Fundraising Goal
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Our goal is to raise $10,000 to expand our programs and
                        ensure mental health support for those who need it the
                        most.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Physical Donation
            </Text>
            <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
              <Text
                className="text-black-900 text-sm w-full"
                size="txtRobotoMedium14"
              >
                Address
              </Text>
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                409, Lebuhraya Babington, 10450 George Town, Pulau Pinang
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="border border-black-900_19 border-solid flex md:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_imagecontainer.svg"
                  alt="imagecontainer_One"
                />
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    Clothes, Kitchenware Foods and more
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[952px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    You may donate things such as old clothing, fork and spoon,
                    kitchen stuff, tableware, biscuits, fresh foods and etc. We
                    are accepting physical donation to the located address
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col h-[300px] md:h-auto items-start justify-start max-w-[1100px] mx-auto py-1 w-full">
            <div
              className="bg-black-900_0c bg-cover bg-no-repeat flex flex-col h-[292px] items-center justify-end p-[116px] md:px-10 sm:px-5 rounded-md w-full"
              style={{ backgroundImage: "url('images/img_image.svg')" }}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start mt-[5px] w-[37%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtRobotoMedium16"
                >
                  View the campaign physical donate location
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="bg-black-900_99 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="bg-blue_gray-100_7f h-[100px] rounded-[50%] w-[100px]"></div>
              <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  Campaign Organizer
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                    size="txtRobotoRegular12"
                  >
                    Charity Name
                  </Text>
                </div>
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtRobotoRegular16WhiteA700"
                >
                  We are a nonprofit organization dedicated to promoting mental
                  health and well-being.
                </Text>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <Footer className="flex gap-[60px] items-center justify-center p-[60px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default CampaignPagePage;
