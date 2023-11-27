import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const AdminDashboardPagePage = () => {
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
              className="!sticky !w-[220px] bg-black-900_0c flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0] fixed left-0"
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
                className="flex flex-col items-center justify-start mb-[1536px] mt-3 w-full"
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
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                    size="txtRobotoBold40"
                  >
                    Campaign Statistics
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start py-5 w-full"
                    orientation="horizontal"
                  >
                    <div className="border border-black-900_19 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-md w-full">
                      <Text
                        className="text-base text-black-900_7f w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Total Donations
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                        size="txtRobotoMedium28"
                      >
                        $50,000
                      </Text>
                    </div>
                    <div className="border border-black-900_19 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-md w-full">
                      <Text
                        className="text-base text-black-900_7f w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Number of Donors
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                        size="txtRobotoMedium28"
                      >
                        500
                      </Text>
                    </div>
                    <div className="border border-black-900_19 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-md w-full">
                      <Text
                        className="text-base text-black-900_7f w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Active Campaigns
                      </Text>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtRobotoMedium28"
                      >
                        20
                      </Text>
                    </div>
                  </List>
                </div>
                <Line className="bg-black-900_19 h-px w-full" />
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
                          Pending Campaigns
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-10 items-start justify-center py-5 w-full">
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                          <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                            <Img
                              className="h-[74px] md:h-auto object-cover w-[93%]"
                              src="images/img_icon_3.png"
                              alt="icon"
                            />
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-center text-xl w-full"
                              size="txtRobotoRegular20"
                            >
                              Campaign Title 1
                            </Text>
                            <Text
                              className="text-base text-black-900_7f text-center w-full"
                              size="txtRobotoRegular16Black9007f"
                            >
                              Charity A
                            </Text>
                          </div>
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                            size="txtRobotoMedium28"
                          >
                            Raised: $5,000
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                          <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                            <Img
                              className="h-[74px] md:h-auto object-cover w-[93%]"
                              src="images/img_icon_3.png"
                              alt="icon_One"
                            />
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-center text-xl w-full"
                              size="txtRobotoRegular20"
                            >
                              Campaign Title 2
                            </Text>
                            <Text
                              className="text-base text-black-900_7f text-center w-full"
                              size="txtRobotoRegular16Black9007f"
                            >
                              Charity B
                            </Text>
                          </div>
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                            size="txtRobotoMedium28"
                          >
                            Raised: $2,500
                          </Text>
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
                          Approved Campaigns
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-10 items-start justify-center py-5 w-full">
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                          <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                            <Img
                              className="h-[74px] md:h-auto object-cover w-[93%]"
                              src="images/img_icon_4.png"
                              alt="icon"
                            />
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-center text-xl w-full"
                              size="txtRobotoRegular20"
                            >
                              Campaign Title 3
                            </Text>
                            <Text
                              className="text-base text-black-900_7f text-center w-full"
                              size="txtRobotoRegular16Black9007f"
                            >
                              Charity C
                            </Text>
                          </div>
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                            size="txtRobotoMedium28"
                          >
                            Raised: $10,000
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                          <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                            <Img
                              className="h-[74px] md:h-auto object-cover w-[93%]"
                              src="images/img_icon_4.png"
                              alt="icon_One"
                            />
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-center text-xl w-full"
                              size="txtRobotoRegular20"
                            >
                              Campaign Title 4
                            </Text>
                            <Text
                              className="text-base text-black-900_7f text-center w-full"
                              size="txtRobotoRegular16Black9007f"
                            >
                              Charity D
                            </Text>
                          </div>
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                            size="txtRobotoMedium28"
                          >
                            Raised: $7,500
                          </Text>
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
                      <div className="flex sm:flex-col flex-row gap-10 items-start justify-center py-5 w-full">
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                          <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                            <Img
                              className="h-[74px] md:h-auto object-cover w-[93%]"
                              src="images/img_icon_5.png"
                              alt="icon"
                            />
                          </div>
                          <div className="flex flex-col gap-5 items-center justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-center text-xl w-full"
                                size="txtRobotoRegular20"
                              >
                                Campaign Title 5
                              </Text>
                              <Text
                                className="text-base text-black-900_7f text-center w-full"
                                size="txtRobotoRegular16Black9007f"
                              >
                                Charity E
                              </Text>
                            </div>
                            <Text
                              className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                              size="txtRobotoMedium28"
                            >
                              Reason: Invalid Campaign
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                          <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                            <Img
                              className="h-[74px] md:h-auto object-cover w-[93%]"
                              src="images/img_icon_5.png"
                              alt="icon_One"
                            />
                          </div>
                          <div className="flex flex-col gap-5 items-center justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-center text-xl w-full"
                                size="txtRobotoRegular20"
                              >
                                Campaign Title 6
                              </Text>
                              <Text
                                className="text-base text-black-900_7f text-center w-full"
                                size="txtRobotoRegular16Black9007f"
                              >
                                Charity F
                              </Text>
                            </div>
                            <Text
                              className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                              size="txtRobotoMedium28"
                            >
                              Reason: Reference and Documents does not verified
                            </Text>
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

export default AdminDashboardPagePage;
