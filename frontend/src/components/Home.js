import React from "react";
import LeftSidebar from "./LeftSidebar";
// import Feed from "./Feed";
import RightSidebar from "./RightSidebar";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";
import useOtherUsers from "../hooks/useOtherUsers";
import useGetMyTweets from "../hooks/useGetMyTweets";
// import Feed from "./Feed";
// import Profile from "./Profile";

const Home = () => {
  // const { user } = useSelector((store) => store.user);
  const { user, otherUsers } = useSelector((store) => store.user);

  useOtherUsers(user?._id);
  useGetMyTweets(user?._id);

  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftSidebar />
      {/* <Feed /> */}
      {/* <Profile /> */}
      <Outlet />
      <RightSidebar otherUsers={otherUsers} />
    </div>
  );
};

export default Home;
