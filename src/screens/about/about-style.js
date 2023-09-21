import styled from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #1f2221;
  padding-bottom: 150px;
`;

export const ContainerAboutInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 45px;
  width: 365px;
  height: 734px;
  margin-left: 49px;
  margin-top: 95px;
  background-color: #393939;
  border-radius: 10px;
`;

export const ContainerImageLogo = styled.div`
  position: relative;
  top: 20px;
  width: 230px;
  height: 240px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  //border-top: 1px solid #000;
  //border-bottom: 2px solid #0de5b2;
  border-radius: 20px;
  box-shadow: 1px 2px 1px 1px #000;
`;

export const ConstainerSocialNetWorks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`;

export const BtnSocialNetWorks = styled.a`
  padding: 0.6rem;
  background-color: #1d1d1d;
  border-radius: 10px;
  color: ${({ color }) => color};
  font-size: 1.3rem;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(32, 178, 170, 1) 0%,
      rgba(0, 0, 255, 1) 100%
    );
    color: #fff;
  }
`;

export const ContainerOtherContacts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  row-gap: 5px;
  background: #1d1d1d;
  border-radius: 10px;
  width: 280px;
  height: 200px;
`;

export const TextOtherContacts = styled.label`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`;

export const ContainerSubContacts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ContainerInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #444;
  gap: 1rem;
  justify-content: start;
  margin-bottom: 0.2rem;
  width: 100%;
`;

export const ContainerIconInfoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
  border-radius: 5px;
  height: 2rem;
  padding: 0.1rem;
  width: 2rem;
`;

export const TextInfoCard = styled.h3`
  color: #a6a6a6;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const SubTextInfoCard = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`;

export const ContainerButtonCV = styled.div`
  width: 190px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(58, 166, 226, 0.7);
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: rgba(58, 166, 226, 1);
  }
`;

export const TextButtonCV = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
`;

export const Line = styled.div`
  position: relative;
  left: 50px;
  top: 100px;
  width: 3px;
  height: 1700px;
  background: #c7c7c7;
  border-radius: 10px;
`;

export const LineHorizon = styled.div`
  background: linear-gradient(90deg, #20b2aa, #00f);
  content: "";
  height: 3px;
  margin-top: 5px;
  width: 30%;
`;

export const ContainerInfomationAbout = styled.div`
  position: relative;
  left: 80px;
  top: 120px;
`;

export const ContainerFormation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const TitleInformations = styled.label`
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 48px;
  color: #ffffff;
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
  margin-top: 20px;
`;

/*

export const ContainerAbout = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  //background: #1f2221;
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
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
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
  //background: linear-gradient(180deg, #34454f 61.46%, rgba(0, 0, 0, 0) 100%);
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
*/
