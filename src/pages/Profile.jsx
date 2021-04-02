import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/templates/HeaderContainer";

//プロフィールページの実装（userストアにデータベタ書きしたものを表示だけ）

const ProfilePage = styled.div`
  text-align: center;
  width: 800px;
`;

const ProfileTitle = styled.h1``;
const UserNameTitle = styled.h1``;

const ProfileContent = styled.div``;

const UserPhoto = styled.div``;

const UserInfo = styled.div``;

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <>
      <Header />
      <ProfilePage>
        <ProfileTitle>Profile</ProfileTitle>
        <UserNameTitle>ここにユーザーネーム：{profile.username}</UserNameTitle>
        <ProfileContent>
          <UserPhoto></UserPhoto>
          <UserInfo></UserInfo>
        </ProfileContent>
      </ProfilePage>
    </>
  );
};

export default Profile;
