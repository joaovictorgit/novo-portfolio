import { styled } from "styled-components";

export const ItemInformationFormation = styled.div`
  width: 510px;
  height: ${({ expanded }) => (expanded ? "262px" : "114px")};
  background: #499499;
  border-left: 10px solid #12a1de;
  cursor: pointer;
`;

export const ContainerTitleFormation = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 15px;
  margin-left: 10px;
`;

export const TitleFormation = styled.label`
  font-family: "Noto Sans Gujarati UI";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const InstituteFormation = styled.label`
  margin-left: 10px;
  margin-top: 20px;
  font-family: "Noto Sans Gujarati UI";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const TextStatusFormation = styled.label`
  position: relative;
  top: ${({ expanded }) => (expanded ? "150px" : "5px")};
  right: 10px;
  font-family: "Noto Sans Gujarati UI";
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
  width: 83px;
  height: 32px;
  display: flex;
  flex-direction: column;
  margin-left: 420px;
  margin-top: -30px;
`;

export const DateFormation = styled.label`
  font-family: "Noto Sans Gujarati UI";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
`;
