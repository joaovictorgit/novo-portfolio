import styled from "styled-components";

export const ContainerItemCourses = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 80px;
  background: #393939;
  border-radius: 5px;
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
  color: #ffffff;
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
`;

export const LogoInstitute = styled.img`
  width: 35px;
  height: 35px;
`;

export const ContainerTextsNameCourse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextNameCourse = styled.label`
  width: 250px;
  font-family: "Noto Sans Gujarati UI", sans-serif;
  overflow-wrap: break-word;
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
