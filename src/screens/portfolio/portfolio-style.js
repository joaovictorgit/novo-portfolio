import styled from "styled-components";

export const ContainerPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #1f2221;
  padding-bottom: 100%;
`;

export const ContainerTitlePortfolio = styled.div`
  position: relative;
  left: 89px;
  top: 180px;
  display: flex;
  flex-direction: column;
`;

export const TitlePortfolio = styled.h1`
  font-family: "Noto Sans Hebrew", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 54px;
  color: #ffffff;
`;

export const LinePortfolio = styled.div`
  position: relative;
  left: 100px;
  top: -25px;
  background-color: #bdbdbd;
  width: 464px;
  height: 3px;
  transform: rotate(0.25deg);
`;

export const ContainerProjects = styled.div`
  position: relative;
  left: 90px;
  top: 220px;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 20px;
`;
