import React from "react";
import Image from "next/image";

//Chatbot

// fit the image to the screen
const page = () => {
  return (
    <div
      className="h-screen w-full md:w-1/5 bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/info.png')" }}
    ></div>
  );
};

export default page;
