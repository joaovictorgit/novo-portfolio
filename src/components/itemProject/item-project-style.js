import styled from "styled-components";

export const ContainerItemProject = styled.div`
  box-sizing: border-box;
  width: 247px;
  height: 410px;
  background: #393939;
  box-shadow: 2px 4px 4px 2px rgba(217, 217, 217, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const LineItemProject = styled.div`
  position: relative;
  top: 180px;
  width: 247px;
  height: 3px;
  background-color: #8b8b8f;
  transform: rotate(0.17deg);
`;

export const ContainerDescriptionItemProject = styled.div`
  position: relative;
  top: 190px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const TitleDescriptionItemProject = styled.h1`
  position: relative;
  left: 15px;
  top: -10px;
  font-family: "Noto Sans Hebrew", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 27px;
  color: #ffffff;
`;

export const TextDescriptionItemProject = styled.label`
  position: relative;
  left: 18px;
  top: -15px;
  font-family: "Noto Sans Hebrew", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: #d2d2d2;
`;

export const ContainerTechnologies = styled.div`
  position: relative;
  left: 110px;
  top: -5px;
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;

export const ContainerIconTechnology = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: #646464;
  color: ${({ backgroundColor }) => backgroundColor};
`;
