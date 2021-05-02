import React from "react";
import BottomNavbarLinks from "../../constants/bottomNavbarLinks";
import "./bottomNavbar.css";

let BottomNavbar = () => {
  return (
    <React.Fragment>
      <div className="px-2 py-1 bottomNavbar ">
        {BottomNavbarLinks?.map((link) => {
          return (
            <div className="m-2 bottomNavbarLink">
              <i className={link.logo} />
              <small>{link.title}</small>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default BottomNavbar;
