import React from "react";
const Navbar = (props) => {
  const { imgSrc } = props;
  return (
    <>
      <div className="container flex justify-between px-10 my-6  sm:flex-row  lg:flex-row flex-col gap-7  items-center ">
        <div className="logo">
          <img  src={imgSrc} alt="" />
        </div>

        <ul className="flex gap-6" >
            <li><a href="">Menu</a></li>
            <li><a href="">Locations</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
<button className="bg-red-700  text-white px-12 py-4 text-1xl sm:px-4 sm:py-1 lg:px-4  lg:py-1 ">Login</button>

      </div>
    </>
  );
};
export default Navbar;
