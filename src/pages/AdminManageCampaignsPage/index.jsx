import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const AdminManageCampaignsPagePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto md:pl-10 sm:pl-5  pt-20 w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-start w-full">
        <div className="bg-white-A700 flex flex-row h-20 md:h-auto items-center justify-center p-5 shadow-bs w-full fixed top-0 z-[1]">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:px-5 w-full">
              <div className="bg-black-900_19 h-10 rounded-[50%] w-10"></div>
              <Text
                className="flex-1 ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                size="txtRobotoMedium28"
              >
                Admin Dashboard
              </Text>
              <Button
                className="common-pointer cursor-pointer min-w-[56px] md:ml-[0] ml-[1060px] md:mt-0 my-2 text-base text-center"
                onClick={() => navigate("/homepage")}
                shape="square"
                color="white_A700"
                size="xs"
              >
                Log Out
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[220px] bg-black-900_0c flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "17px 17px 17px 22px",
                    gap: "16px",
                    color: "#000000",
                    fontWeight: 500,
                    fontSize: "16px",
                  },
                }}
                className="flex flex-col items-center justify-start mb-[1564px] mt-3 w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-[18px] md:h-auto object-cover w-[100%]"
                      src="images/img_icon.png"
                      alt="icon"
                    />
                  }
                  active={window.location.pathname === "/admindashboardpage"}
                  href="/admindashboardpage"
                >
                  <Text className="flex-1 w-auto">Dashboard</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[18px] md:h-auto object-cover w-[100%]"
                      src="images/img_icon_18x16.png"
                      alt="icon_One"
                    />
                  }
                  active={
                    window.location.pathname === "/adminmanagecampaignspage"
                  }
                  href="/adminmanagecampaignspage"
                >
                  <Text className="flex-1 w-auto">Manage Campaigns</Text>
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div className="bg-black-900_99 flex flex-col md:gap-10 gap-[60px] items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                    size="txtRobotoBold40WhiteA700"
                  >
                    Manage Campaigns
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtRobotoRegular16WhiteA700"
                  >
                    View and manage ongoing campaigns
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px w-full" />
              </div>
              <div className="flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                        size="txtRobotoBold40"
                      >
                        Pending Campaigns
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-10 items-center py-5 w-full"
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
                              Campaign Title 1
                            </Text>
                            <Text
                              className="text-black-900_7f text-sm w-full"
                              size="txtRobotoRegular14"
                            >
                              Submitted by User A
                            </Text>
                            <Text
                              className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                              size="txtRobotoRegular16"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                            <div className="flex flex-col items-center justify-start py-1 w-full">
                              <Text
                                className="bg-blue_gray-100_7f border border-black-900_19 border-solid h-5 justify-center px-2 py-0.5 rounded-sm text-black-900 text-xs w-10"
                                size="txtRobotoRegular12"
                              >
                                New
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start py-1 w-full">
                              <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                                <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                                <div className="flex flex-1 flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900 text-sm w-full"
                                    size="txtRobotoMedium14"
                                  >
                                    User A
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-center w-auto">
                              <Button
                                className="cursor-pointer rounded-md text-center text-sm w-[120px]"
                                shape="round"
                                color="black_900_19"
                              >
                                Deny
                              </Button>
                              <Button
                                className="cursor-pointer rounded-md text-center text-sm w-[120px]"
                                shape="round"
                              >
                                Approve
                              </Button>
                            </div>
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
                              Campaign Title 2
                            </Text>
                            <Text
                              className="text-black-900_7f text-sm w-full"
                              size="txtRobotoRegular14"
                            >
                              Submitted by User B
                            </Text>
                            <Text
                              className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                              size="txtRobotoRegular16"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                            <div className="flex flex-col items-center justify-start py-1 w-full">
                              <Text
                                className="bg-blue_gray-100_7f border border-black-900_19 border-solid h-5 justify-center px-2 py-0.5 rounded-sm text-black-900 text-xs w-10"
                                size="txtRobotoRegular12"
                              >
                                New
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start py-1 w-full">
                              <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                                <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                                <div className="flex flex-1 flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900 text-sm w-full"
                                    size="txtRobotoMedium14"
                                  >
                                    User B
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-center w-auto">
                              <Button
                                className="cursor-pointer rounded-md text-center text-sm w-[120px]"
                                shape="round"
                                color="black_900_19"
                              >
                                Deny
                              </Button>
                              <Button
                                className="cursor-pointer rounded-md text-center text-sm w-[120px]"
                                shape="round"
                              >
                                Approve
                              </Button>
                            </div>
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
                <div className="flex flex-1 flex-col items-center justify-center my-0 p-[60px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                          size="txtRobotoBold40"
                        >
                          Approved Campaigns
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center py-5 w-full">
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
                                Campaign Title 3
                              </Text>
                              <Text
                                className="text-black-900_7f text-sm w-full"
                                size="txtRobotoRegular14"
                              >
                                Submitted by User C
                              </Text>
                              <Text
                                className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                                size="txtRobotoRegular16"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </Text>
                              <div className="flex flex-col items-center justify-start py-1 w-full">
                                <Text
                                  className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                                  size="txtRobotoRegular12"
                                >
                                  Approved
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start py-1 w-full">
                                <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                                  <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-black-900 text-sm w-full"
                                      size="txtRobotoMedium14"
                                    >
                                      User C
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-black-900_19 h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center my-0 p-[60px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                          size="txtRobotoBold40"
                        >
                          Rejected Campaigns
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center py-5 w-full">
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
                                Campaign Title 4
                              </Text>
                              <Text
                                className="text-black-900_7f text-sm w-full"
                                size="txtRobotoRegular14"
                              >
                                Submitted by User D
                              </Text>
                              <Text
                                className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                                size="txtRobotoRegular16"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </Text>
                              <div className="flex flex-col items-center justify-start py-1 w-full">
                                <Text
                                  className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                                  size="txtRobotoRegular12"
                                >
                                  Rejected
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start py-1 w-full">
                                <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                                  <div className="bg-black-900_19 h-5 rounded-[50%] w-5"></div>
                                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-black-900 text-sm w-full"
                                      size="txtRobotoMedium14"
                                    >
                                      User D
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-black-900_19 h-px w-full" />
                  </div>
                </div>
              </List>
              <footer className="flex items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminManageCampaignsPagePage;
