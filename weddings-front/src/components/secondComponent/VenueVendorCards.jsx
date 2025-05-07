import React from "react";
import styled from "styled-components";
import { FaPlus, FaChevronDown } from "react-icons/fa";

const Wrapper = styled.div`
  background-color: #fff4dc;
  padding: 40px;
  display: flex;
  justify-content: center;
`;

const CardsGrid = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #999;
  border-radius: 14px;
  width: 450px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 22px;
  margin: 0;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#ff7a7a" : "#f5f5f5")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 25px;
  background-color: transparent;
  font-size: 14px;
`;

const Subtext = styled.p`
  margin: 20px 0 10px;
  color: #333;
  font-size: 14px;
`;

const AddButton = styled.button`
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #999;
  background: #f0f0f0;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  padding-top: 10px;
`;

const VenueVendorCards = () => {
  return (
    <Wrapper>
      <CardsGrid>
        {/* Venues */}
        <Card>
          <HeaderRow>
            <Title>Venues</Title>
            <Button primary>Find venues</Button>
          </HeaderRow>
          <p>Find your kind of place for the celebration to go down.</p>
          <Subtext>Add Your wedding venues here</Subtext>
          <AddButton>
            <FaPlus /> Add venues
          </AddButton>
          <Divider />
          <Footer>
            <span>Here are some gems we recommend for you.</span>
            <FaChevronDown />
          </Footer>
        </Card>

        {/* Vendors */}
        <Card>
          <HeaderRow>
            <Title>Vendors</Title>
            <Select>
              <option>Select Vendor</option>
              <option>Caterer</option>
              <option>Photographer</option>
            </Select>
          </HeaderRow>
          <p>Find all your vendors for your celebration.</p>
          <Subtext>Add Your vendors for your wedding here</Subtext>
          <AddButton>
            <FaPlus /> Add vendors
          </AddButton>
          <Divider />
          <Footer>
            <span>Here are some gems we recommend for you.</span>
            <FaChevronDown />
          </Footer>
        </Card>
      </CardsGrid>
    </Wrapper>
  );
};

export default VenueVendorCards;
