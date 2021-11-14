import React from "react";
import HeaderBtn from "../component/HeaderButton/headerbtn";
import "./profile.css";
const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_backgroundImage">
        <div className="profile_backgroundButtons">
          <HeaderBtn
            text="Edit cover photo"
            width="160px"
            height="30px"
            color="white"
            fontSize="12px"
            letterSpacing="0px"
            border="2px solid #9b9c9e"
            Icon="far fa-image"
          />
          <HeaderBtn
            text="Edit profile"
            width="120px"
            height="30px"
            color="white"
            fontSize="12px"
            border="2px solid #9b9c9e"
            Icon="fas fa-pen"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
