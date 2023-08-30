import styled from "styled-components";

export const ContainerHome = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: rotate(180deg);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const ImageBackground = styled.img`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  object-fit: fill;
  z-index: -1;
  transform: rotate(180deg);
  background-position: center;
`;

export const ContainerInformationHome = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 895px;
  top: 200px;
  left: -200px;
`;

export const ContainerTitleInformation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: none;
  margin-left: 300px;
`;

export const TitleInformation = styled.label`
  font-family: "Rubik Mono One";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: ${(props) => props.color};
`;

export const TextInformation = styled.label`
  width: 750px;
  height: 100px;
  font-family: "Noto Sans Gujarati";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  margin-left: 300px;
`;

export const ButtonAbout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin-left: 300px;
  background: #3aa6e2;
  border: none;
  border-radius: 20px;
  font-family: "Noto Sans Gujarati";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 46px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ContainerPolygon = styled.div`
  position: absolute;
  width: 358px;
  height: 352px;
  left: 70%;
  top: 25%;
  background: linear-gradient(180deg, #00a1fc 0%, rgba(0, 161, 252, 0) 100%);
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
