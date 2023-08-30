import { useState } from "react";
import {
  ContainerDateFormation,
  ContainerTitleFormation,
  DateFormation,
  InstituteFormation,
  ItemInformationFormation,
  TextStatusFormation,
  TitleFormation,
} from "./item-formation-style";

import { MdSchool } from "react-icons/md";

const ItemFormation = ({
  formation,
  institute,
  status,
  statusColor,
  begin,
  end,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <ItemInformationFormation expanded={expanded} onClick={toggleExpand}>
      <ContainerTitleFormation>
        <MdSchool size={24} color="#ffffff" />
        <TitleFormation>{formation}</TitleFormation>
      </ContainerTitleFormation>
      <ContainerDateFormation>
        <DateFormation>Início: {begin}</DateFormation>
        <DateFormation>Fim: {end}</DateFormation>
      </ContainerDateFormation>
      <InstituteFormation>Instituição: {institute}</InstituteFormation>
      <TextStatusFormation expanded={expanded} statusColor={statusColor}>
        {status}
      </TextStatusFormation>
    </ItemInformationFormation>
  );
};

export default ItemFormation;
