import Header from "../../components/header/header";
import {
  ContainerPortfolio,
  ContainerTitlePortfolio,
  LinePortfolio,
  TitlePortfolio,
} from "./portfolio-style";

const Portfolio = () => {
  return (
    <ContainerPortfolio>
      <Header />
      <ContainerTitlePortfolio>
        <TitlePortfolio>Projetos criados</TitlePortfolio>
        <LinePortfolio />
      </ContainerTitlePortfolio>
    </ContainerPortfolio>
  );
};

export default Portfolio;
