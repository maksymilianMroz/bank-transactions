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

  @media (max-width: 1125px) {
    flex-direction: column;
  }
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
