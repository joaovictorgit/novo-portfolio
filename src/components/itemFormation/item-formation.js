import { useState } from "react";
import {
  ContainerDateFormation,
  ContainerDescriptionInformation,
  ContainerTitleFormation,
  DateFormation,
  ImageFormation,
  InstituteFormation,
  ItemInformationFormation,
  TextStatusFormation,
  TitleDescription,
  TitleFormation,
} from "./item-formation-style";
import EP from "../../assets/ep.jpg";
import Unifael from "../../assets/unifael.jpeg";

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
        <ImageFormation
          src={status === "Concluído" ? EP : Unifael}
          alt="Instituição"
        />
        <InstituteFormation>Instituição: {institute}</InstituteFormation>
      </ContainerTitleFormation>
      <ContainerDateFormation>
        <DateFormation>Início: {begin}</DateFormation>
        <DateFormation>Fim: {end}</DateFormation>
      </ContainerDateFormation>
      <ContainerTitleFormation>
        <TitleFormation> Área: {formation}</TitleFormation>
      </ContainerTitleFormation>
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
