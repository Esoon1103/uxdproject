import React from "react";

import { Img, Line, List, PagerIndicator, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pt-20 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs w-full fixed top-0" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Our Mission
            </Text>
            <Text
              className="leading-[24.00px] max-w-[520px] md:max-w-full text-base text-black-900 text-center"
              size="txtRobotoRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              ipsum sed lorem venenatis imperdiet. Donec sit amet euismod neque.
            </Text>
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
                  Who We Are
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[520px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ut ipsum sed lorem venenatis imperdiet. Donec sit amet
                  euismod neque.
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
                        History
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                        Team
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                        Partners
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                size="txtRobotoBold40"
              >
                Our Achievements
              </Text>
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoRegular16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-center py-5 w-full">
                <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                  <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                    <Img
                      className="h-[74px] md:h-auto object-cover w-[93%]"
                      src="images/img_icon_74x70.png"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoRegular20"
                      >
                        Award 1
                      </Text>
                      <Text
                        className="text-base text-black-900_7f text-center w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Year 2020
                      </Text>
                    </div>
                    <Text
                      className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                      size="txtRobotoMedium28"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                  <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                    <Img
                      className="h-[74px] md:h-auto object-cover w-[93%]"
                      src="images/img_icon_1.png"
                      alt="icon_One"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                        Year 2021
                      </Text>
                    </div>
                    <Text
                      className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                      size="txtRobotoMedium28"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                  <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                    <Img
                      className="h-[74px] md:h-auto object-cover w-[93%]"
                      src="images/img_icon_2.png"
                      alt="icon_Two"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoRegular20"
                      >
                        Donation 3
                      </Text>
                      <Text
                        className="text-base text-black-900_7f text-center w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Year 2022
                      </Text>
                    </div>
                    <Text
                      className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                      size="txtRobotoMedium28"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
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
        </List>
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
        <Footer className="flex gap-[60px] items-center justify-center p-[60px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutPagePage;
