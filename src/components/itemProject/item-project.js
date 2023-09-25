import {
  ContainerDescriptionItemProject,
  ContainerIconTechnology,
  ContainerImageItemProject,
  ContainerItemProject,
  ContainerTechnologies,
  ImageItemProject,
  LineItemProject,
  TextDescriptionItemProject,
  TitleDescriptionItemProject,
} from "./item-project-style";

import * as IconsTb from "react-icons/tb";
import * as IconsGr from "react-icons/gr";
import * as IconsFa from "react-icons/fa";
import * as IconsBi from "react-icons/bi";
import React from "react";

const ItemProject = ({ title, description, technologies, images, type }) => {
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
      <ContainerImageItemProject>
        {images
          .map((image, index) => (
            <ImageItemProject
              widthImage={type === "app" ? "100px" : "250px"}
              heightImage={type === "app" ? "250px" : "180px"}
              key={index}
              src={require(`../../assets/projects/${image}`)}
              alt="project"
            />
          ))
          .reverse()}
      </ContainerImageItemProject>
      <LineItemProject topImage={type === "app" ? "10px" : "20px"} />
      <ContainerDescriptionItemProject
        topImage={type === "app" ? "10px" : "20px"}
      >
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
