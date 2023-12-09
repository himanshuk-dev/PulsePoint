import React from "react";
import info from "../../public/info.png";

//header image

// fit the image to the screen
const Header = () => {
  return (
    <div
      className=" w-100 h-100 md:w-1/2 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: info }}
    ></div>
  );
};

export default Header;
