import React from "react";
import Fitness from "../components/fitness";
import Health from "../components/health";
import Heart from "../components/heart";
import Chat from "../components/chat";
import Sleep from "../components/sleep";

// /dashboard

const page = () => {
  return (
    <div>
      <div className="text-3xl font-bold p-8 text-center bg-white text-black rounded w-100 m-5">
        Welcome to Dashboard!
      </div>
      <Fitness />
      <Health />
      <Heart />
      <Chat />
      <Sleep />
    </div>
  );
};

export default page;
