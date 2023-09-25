import Header from "../../components/header/header";
import ItemProject from "../../components/itemProject/item-project";
import {
  ContainerPortfolio,
  ContainerProjects,
  ContainerTitlePortfolio,
  LinePortfolio,
  TitlePortfolio,
} from "./portfolio-style";

import Projects from "../../services/projects.json";

const Portfolio = () => {
  return (
    <ContainerPortfolio>
      <Header />
      <ContainerTitlePortfolio>
        <TitlePortfolio>Projetos criados</TitlePortfolio>
        <LinePortfolio />
      </ContainerTitlePortfolio>
      <ContainerProjects>
        {Projects.map((project) => (
          <ItemProject
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            images={project.images}
            type={project.type}
          />
        ))}
      </ContainerProjects>
    </ContainerPortfolio>
  );
};

export default Portfolio;
