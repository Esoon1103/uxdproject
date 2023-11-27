import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const BrowseCampaignsPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pt-20 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs w-full fixed top-0" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtRobotoBold40"
            >
              Wish to Create a Fundraising Campaign?
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Apply the campaign form by clicking the button below!
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/submitcampaignpage")}
                shape="round"
                size="lg"
              >
                Apply Now
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              All Campaigns
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <div
                className="common-pointer flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full"
                onClick={() => navigate("/campaignpage")}
              >
                <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[93%]"
                    src="images/img_icon.png"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoRegular20"
                    >
                      Campaign 1
                    </Text>
                    <Text
                      className="text-base text-black-900_7f text-center w-full"
                      size="txtRobotoRegular16Black9007f"
                    >
                      Charity Name 1
                    </Text>
                  </div>
                  <Text
                    className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                    size="txtRobotoMedium28"
                  >
                    Progress: $5000 of $10000
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full"
                onClick={() => navigate("/campaignpage")}
              >
                <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[93%]"
                    src="images/img_icon.png"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-xl w-full"
                    size="txtRobotoRegular20"
                  >
                    Campaign 2
                  </Text>
                  <Text
                    className="text-base text-black-900_7f text-center w-full"
                    size="txtRobotoRegular16Black9007f"
                  >
                    Charity Name 2
                  </Text>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                  size="txtRobotoMedium28"
                >
                  Progress: $1000 of $5000
                </Text>
              </div>
              <div
                className="common-pointer flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full"
                onClick={() => navigate("/campaignpage")}
              >
                <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[93%]"
                    src="images/img_icon.png"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoRegular20"
                    >
                      Campaign 3
                    </Text>
                    <Text
                      className="text-base text-black-900_7f text-center w-full"
                      size="txtRobotoRegular16Black9007f"
                    >
                      Charity Name 3
                    </Text>
                  </div>
                  <Text
                    className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                    size="txtRobotoMedium28"
                  >
                    Progress: $25000 of $50000
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <Footer className="flex gap-[60px] items-center justify-center p-[60px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BrowseCampaignsPagePage;
