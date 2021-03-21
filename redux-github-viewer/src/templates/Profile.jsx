import React from "react";
import styled from "styled-components";

const ProfilePage=styled.div`
text-align:center;
width:800px;
`

const ProfileTitle=styled.h1`
`

const ProfileContent=styled.div`
`

const UserPhoto=styled.div`
`

const UserInfo=styled.div`
`


const Profile = () => {
  return(
  <ProfilePage>
    <ProfileTitle>Profile</ProfileTitle>
    <ProfileContent>
      <UserPhoto>

      </UserPhoto>
      
      <UserInfo>
      </UserInfo>

    </ProfileContent>
  </ProfilePage>
  )
};

export default Profile