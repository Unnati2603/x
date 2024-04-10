import React from "react";
import LeftSidebar from "./LeftSidebar";
// import Feed from "./Feed";
import RightSidebar from "./RightSidebar";

import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import useGetProfile from "../hooks/useGetProfile";
// import Feed from "./Feed";
// import Profile from "./Profile";

const Home = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftSidebar />
      {/* <Feed /> */}
      {/* <Profile /> */}
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Home;
