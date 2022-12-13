import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export const Content = styled.div`
  background-color: green;
  display: flex;

  @media (max-width: 1125px) {
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
