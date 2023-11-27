import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import Header from "components/Header";

const HomePagePage = () => {
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
              Welcome to the Charity Fundraising Platform
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Helping charities and donors connect for a better world.
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/browsecampaignspage")}
                shape="round"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  How It Works
                </Text>
                <div className="flex flex-col gap-10 items-center justify-center py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
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
                          Charities Create Campaigns
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                          size="txtRobotoRegular16"
                        >
                          Charities can create and manage fundraising campaigns
                        </Text>
                        <div className="flex flex-col items-center justify-start py-1 w-full">
                          <Text
                            className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            Track Progress
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-10 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
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
                            Donors Browse and Donate
                          </Text>
                          <Text
                            className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                            size="txtRobotoRegular16"
                          >
                            Donors can browse campaigns, make donations, and
                            engage with updates and comments
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
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
                            Broadcast the Campaigns
                          </Text>
                          <Text
                            className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                            size="txtRobotoRegular16"
                          >
                            The campaigns will be broadcast to the official
                            social media account from Facebook, Instagram and
                            Twitter.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <Img
                className="flex-1 h-[624px] max-h-[624px] sm:w-[] md:w-[]"
                src="images/img_imagecontainer_blue_gray_100.svg"
                alt="imagecontainer_One"
              />
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
              Featured Campaigns
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/browsecampaignspage")}
                shape="round"
                size="lg"
              >
                Donate Now
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[121px] md:pr-10 sm:pr-5 pr-[121px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[70px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="sm"
                    >
                      Education
                    </Button>
                    <Text
                      className="mb-10 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Campaign Image 1
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Education for All
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    Raised $50,000 of $100,000
                  </Text>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[119px] md:pr-10 sm:pr-5 pr-[119px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[48px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="sm"
                    >
                      Water
                    </Button>
                    <Text
                      className="mb-[42px] text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Campaign Image 2
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Clean Water Initiative
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    Raised $25,000 of $50,000
                  </Text>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[119px] md:pr-10 sm:pr-5 pr-[119px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[43px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="sm"
                    >
                      Food
                    </Button>
                    <Text
                      className="mb-[41px] text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Campaign Image 3
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Feeding the Hungry
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    Raised $75,000 of $100,000
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Campaign Broadcast Channels
            </Text>
            <div className="flex md:flex-col flex-row gap-10 items-start justify-center py-5 w-full">
              <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                <div className="bg-blue-A400 flex flex-col h-[89px] items-center justify-start pt-[17px] px-[17px] w-[89px]">
                  <Img
                    className="h-[72px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoRegular20"
                    >
                      Facebook
                    </Text>
                    <Text
                      className="text-base text-black-900_7f text-center w-full"
                      size="txtRobotoRegular16Black9007f"
                    >
                      Follow us on Facebook
                    </Text>
                  </div>
                  <Text
                    className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                    size="txtRobotoMedium28"
                  >
                    facebook.com/charityname
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                <Img
                  className="h-[91px] md:h-auto object-cover w-[91px]"
                  src="images/img_iconinstagram.png"
                  alt="iconinstagram"
                />
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoRegular20"
                    >
                      Instagram
                    </Text>
                    <Text
                      className="text-base text-black-900_7f text-center w-full"
                      size="txtRobotoRegular16Black9007f"
                    >
                      Follow us on Instagram
                    </Text>
                  </div>
                  <Text
                    className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                    size="txtRobotoMedium28"
                  >
                    instagram.com/charityname
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                <div className="bg-blue-500 flex flex-col h-[98px] items-center justify-start p-[23px] sm:px-5 rounded-[50%] w-[98px]">
                  <Img
                    className="h-[39px] my-[5px]"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-xl w-full"
                    size="txtRobotoRegular20"
                  >
                    Twitter
                  </Text>
                  <Text
                    className="text-base text-black-900_7f text-center w-full"
                    size="txtRobotoRegular16Black9007f"
                  >
                    Follow us on Twitter
                  </Text>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                  size="txtRobotoMedium28"
                >
                  twitter.com/charityname
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Stay Updated
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Follow us on social media for the latest updates
            </Text>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="border border-black-900_19 border-solid flex flex-col items-center justify-start rounded-md w-[600px] md:w-full">
                <div className="flex sm:flex-col flex-row gap-2 items-center justify-start p-3 w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-2 items-center justify-start w-full">
                    <div className="bg-black-900_19 h-8 rounded-[50%] w-8"></div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm w-full"
                        size="txtRobotoMedium14"
                      >
                        Charity Name
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-6">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtRobotoRegular16"
                    >
                      •••
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col h-[300px] md:h-auto items-start justify-start w-full">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[129px] items-center justify-end p-2 w-full">
                    <Text
                      className="mt-[135px] text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Image Description
                    </Text>
                    <PagerIndicator
                      className="flex gap-1 h-1 items-center justify-center w-11"
                      count={4}
                      activeCss="inline-block cursor-pointer h-1 bg-white-A700 w-5 rounded-sm"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-1 bg-black-900_4c w-1"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Check out our latest campaign update!
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                      size="txtRobotoRegular12"
                    >
                      #LatestNews
                    </Text>
                  </div>
                </div>
              </div>
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
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  size="lg"
                  variant="outline"
                >
                  Clear
                </Button>
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
        <footer className="flex items-center justify-center p-[60px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-center w-[81%]">
            <div className="flex flex-col h-[100px] md:h-auto items-center justify-center w-auto sm:w-full">
              <Text
                className="text-black-900 text-center text-xl w-full"
                size="txtRobotoRegular20"
              >
                © 2023 Charity Fundraising Platform. All rights reserved.
              </Text>
            </div>
            <div className="flex flex-col h-[100px] md:h-auto items-center justify-center w-auto sm:w-full">
              <Text
                className="common-pointer text-black-900 text-right text-xl w-full"
                size="txtRobotoRegular20"
                onClick={() => navigate("/adminloginpage")}
              >
                ADMIN LOGIN
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePagePage;
