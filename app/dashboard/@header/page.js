import React from "react";

//header image

// fit the image to the screen
const page = () => {
  return (
    <div
      className=" w-100 h-100 md:w-1/2 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/info.png')" }}
    ></div>
  );
};

export default page;
