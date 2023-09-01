import { useState } from "react";
import {
  ContainerDateFormation,
  ContainerDescriptionInformation,
  ContainerTitleFormation,
  DateFormation,
  InstituteFormation,
  ItemInformationFormation,
  TextStatusFormation,
  TitleDescription,
  TitleFormation,
} from "./item-formation-style";

import { MdSchool } from "react-icons/md";

const ItemFormation = ({
  formation,
  institute,
  status,
  statusColor,
  description,
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
      <ContainerDescriptionInformation expanded={expanded}>
        <TitleDescription>Descrição: {description}</TitleDescription>
      </ContainerDescriptionInformation>
    </ItemInformationFormation>
  );
};

export default ItemFormation;
