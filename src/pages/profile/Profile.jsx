import React from "react";
import UserDashbord from "../../compontents/UserDashbord/userDashbord";
import MainLayout from "../../layout/MainLayout";

import ProfileInfo from "./ProfileInfo";
const Profile = () => {
  return (
    <MainLayout>
      <ProfileInfo />
      <UserDashbord />
    </MainLayout>
  );
};

export default Profile;
