import {
  ContainerDescriptionItemProject,
  ContainerIconTechnology,
  ContainerItemProject,
  ContainerTechnologies,
  LineItemProject,
  TextDescriptionItemProject,
  TitleDescriptionItemProject,
} from "./item-project-style";

import * as IconsTb from "react-icons/tb";
import * as IconsGr from "react-icons/gr";
import * as IconsFa from "react-icons/fa";
import * as IconsBi from "react-icons/bi";
import React from "react";

const ItemProject = ({ title, description, technologies }) => {
  const checkTypeIcon = (id, tech) => {
    if (id === "tb") {
      return React.createElement(IconsTb[tech]);
    }
    if (id === "gr") {
      return React.createElement(IconsGr[tech]);
    }
    if (id === "fa") {
      return React.createElement(IconsFa[tech]);
    }
    if (id === "bi") {
      return React.createElement(IconsBi[tech]);
    }
  };

  return (
    <ContainerItemProject>
      <h1>Video</h1>
      <LineItemProject />
      <ContainerDescriptionItemProject>
        <TitleDescriptionItemProject>{title}</TitleDescriptionItemProject>
        <TextDescriptionItemProject>{description}</TextDescriptionItemProject>
        <ContainerTechnologies>
          {technologies.map((technology, index) => (
            <ContainerIconTechnology
              key={index}
              backgroundColor={technology.backgroundColor}
            >
              {checkTypeIcon(technology.id, technology.name)}
            </ContainerIconTechnology>
          ))}
        </ContainerTechnologies>
      </ContainerDescriptionItemProject>
    </ContainerItemProject>
  );
};

export default ItemProject;
