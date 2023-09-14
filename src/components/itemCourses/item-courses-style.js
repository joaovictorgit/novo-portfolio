import styled from "styled-components";

export const ContainerItemCourses = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 87px;
  background: #ffffff;
`;

export const ContainerDurationCourses = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: relative;
  left: 350px;
  top: 10px;
  font-family: "Noto Sans Gujarati UI";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 11px;
  color: #000000;
`;

export const ContainerCalendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const ContainerNameCourse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  position: relative;
  left: 20px;
  top: -20px;
`;

export const ContainerImageNameCourse = styled.div`
  width: 35px;
  height: 35px;
  background-color: #d9d9d9;
`;

export const ContainerTextsNameCourse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextNameCourse = styled.label`
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #000000;
`;
