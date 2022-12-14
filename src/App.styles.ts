import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f6176;
  min-height: 55px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  background-color: #9bb2ba;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f6176;
  min-height: 55px;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1125px) {
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1125px) {
    order: 2;
  }
`;

export const SearchContainer = styled.div`
  background-color: #3f6176;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 5px;
  margin: 18px 0;
`;
