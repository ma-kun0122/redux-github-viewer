import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/templates/HeaderContainer";

//プロフィールページの実装（userストアにデータベタ書きしたものを表示だけ）

const ProfilePage = styled.div`
  max-height: 400px;
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 50px;
`;

const ProfileTitle = styled.h1``;
const UserTitle = styled.label`
  color: rgb(88, 96, 105);
`;
const UserContent = styled.p``;

const ProfileContainer = styled.div`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  display: flex;
`;

const ProfileContent = styled.div`
  padding: 16px;
  height: 100%;
  width: 50%;
`;

const UserPhoto = styled.img`
  display: block;
  height: 100px;
  width: auto;
`;

const UserInfo = styled.div``;

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  console.log(profile);
  return (
    <>
      <Header />
      <ProfilePage>
        <ProfileTitle>Profile</ProfileTitle>
        <ProfileContainer>
          <ProfileContent>
            <UserTitle>プロフィール</UserTitle>
            <UserPhoto src={profile.userpicture} alt="プロフィール画像" />
          </ProfileContent>
          <ProfileContent>
            <UserTitle>ユーザー名</UserTitle>
            <UserContent>{profile.username}</UserContent>
            <UserTitle>メールアドレス</UserTitle>
            <UserContent>{profile.mailadress}</UserContent>
          </ProfileContent>
        </ProfileContainer>
      </ProfilePage>
    </>
  );
};

export default Profile;
