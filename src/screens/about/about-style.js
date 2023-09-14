import styled from "styled-components";

export const ContainerAbout = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: rotate(180deg);
  background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerAboutInformations = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-left: 50px;
  margin-top: 180px;
`;

export const ContainerFormation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleInformations = styled.label`
  font-family: "Noto Sans Gujarati UI";
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 48px;
  color: #ffffff;
`;

export const Line = styled.div`
  width: ${(props) => props.width};
  height: 3px;
  background: #ffffff;
  border-radius: 10px;
`;

export const ContainerPolygon = styled.div`
  position: absolute;
  width: 358px;
  height: 352px;
  left: 70%;
  top: 25%;
  background: linear-gradient(180deg, #00a1fc 25%, rgba(0, 161, 252, 0) 100%);
  border-radius: 180px 180px 180px 50px;
`;

export const ImagePolygon = styled.img`
  object-fit: cover;
  width: 357px;
  height: 348px;
  border-radius: 180px 300px 500px 180px;
  margin-left: 20px;
  margin-top: 10px;
`;

export const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const ContainerMenuSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  gap: 10px;
`;

export const ContainerCourses = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 20px;
`;
