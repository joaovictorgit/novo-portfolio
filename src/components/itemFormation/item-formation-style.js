import { styled } from "styled-components";

export const ItemInformationFormation = styled.div`
  width: 510px;
  height: ${({ expanded }) => (expanded ? "262px" : "114px")};
  background: #393939; //#1d1d1d; //#499499;
  border-left: 5px solid #12a1de;
  //box-shadow: 1px 1px 1px 1px #909090;
  border-radius: 5px;
  cursor: pointer;
`;

export const ContainerTitleFormation = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 15px;
  margin-left: 10px;
`;

export const ImageFormation = styled.img`
  width: 34px;
  height: 34px;
  //border-radius: 50%;
`;

export const TitleFormation = styled.label`
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
  left: 40px;
  top: -15px;
`;

export const InstituteFormation = styled.label`
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const TextStatusFormation = styled.label`
  position: relative;
  top: ${({ expanded }) => (expanded ? "150px" : "-5px")};
  right: 10px;
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.statusColor};
  display: flex;
  justify-content: end;
  text-align: end;
`;

export const ContainerDateFormation = styled.div`
  width: 93px;
  height: 32px;
  display: flex;
  flex-direction: column;
  margin-left: 420px;
  margin-top: -30px;
`;

export const DateFormation = styled.label`
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
`;

export const ContainerDescriptionInformation = styled.div`
  position: relative;
  top: 25px;
  left: 20px;
  display: ${({ expanded }) => (expanded ? "flex" : "none")};
  width: 312px;
  height: 60px;
`;

export const TitleDescription = styled.label`
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #fff;
`;
