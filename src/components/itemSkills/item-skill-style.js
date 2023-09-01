import styled from "styled-components";

export const ContainerItemSkills = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 139px;
  height: 148px;
  background: #fffefe;
  border-top: 3px solid #12a1de;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContainerIcon = styled.div`
  width: 20.97;
  height: 20.97;
  margin-top: -12px;
  margin-left: 8px;
`;

export const TitleSkill = styled.label`
  font-family: "IBM Plex Sans Devanagari";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  margin-left: 8px;
`;

export const ContainerSubtitle = styled.div`
  width: 120px;
  //height: 70px;
  overflow-wrap: break-word;
  line-height: 0.9;
  margin-left: 8px;
`;

export const SubtitleSkill = styled.label`
  font-family: "IBM Plex Sans Devanagari";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #000000;
`;

export const IdentifierSkill = styled.label`
  position: relative;
  top: 4%;
  left: 60%;
  font-family: "IBM Plex Sans Devanagari";
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  color: #000000;
`;