import React from "react";
import styled from "styled-components";
import {
  FaSearch,
  FaHeart,
  FaMapMarkerAlt,
  FaUserFriends,
  FaClipboardList,
} from "react-icons/fa";

const Container = styled.div`
  background-color: #fff5e5;
  padding: 40px;
  border-bottom: 2px solid #0099ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const WelcomeText = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const Name = styled.h1`
  font-size: 48px;
  margin: 0;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
`;

const IconButton = styled.button`
  background-color: ${(props) => (props.active ? "#ffe6e6" : "transparent")};
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  text-align: center;
`;

const PhotoBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffe6f0;
  border-radius: 10px;
  position: relative;
`;

const AddPhoto = styled.p`
  position: absolute;
  bottom: 5px;
  width: 100%;
  font-size: 12px;
  color: #ff3399;
`;

const EditText = styled.p`
  margin-top: 8px;
  color: #ff3399;
  font-size: 14px;
  cursor: pointer;
`;

const SearchSection = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

const Dropdown = styled.select`
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid #ccc;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px 45px 10px 20px;
  border-radius: 25px;
  border: 1px solid #ccc;
  width: 300px;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 5px;
  background-color: #ff5c5c;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  color: white;
`;

const HeaderSection = () => {
  return (
    <Container>
      <WelcomeText>WELCOME</WelcomeText>
      <Name>Benison & b</Name>
      <ButtonGroup>
        <IconButton active>
          <FaHeart /> My wedding
        </IconButton>
        <IconButton>
          <FaMapMarkerAlt /> Add Venue
        </IconButton>
        <IconButton>
          <FaUserFriends /> Vendors
        </IconButton>
        <IconButton>
          <FaClipboardList /> Guest List
        </IconButton>
        <IconButton>Custom Plan</IconButton>
      </ButtonGroup>

      <SearchSection>
        <Dropdown>
          <option value="">categories</option>
        </Dropdown>
        <SearchInputWrapper>
          <SearchInput placeholder="Search..." />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchInputWrapper>
      </SearchSection>

      <ProfileBox>
        <PhotoBox>
          <AddPhoto>Add a photo</AddPhoto>
        </PhotoBox>
        <EditText>Edit</EditText>
      </ProfileBox>
    </Container>
  );
};

export default HeaderSection;
