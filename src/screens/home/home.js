import Header from "../../components/header/header";
import {
  ButtonAbout,
  ContainerHome,
  ContainerInformationHome,
  ContainerPolygon,
  ContainerTitleInformation,
  ImagePolygon,
  TextInformation,
  TitleInformation,
} from "./home-style";
import Image from "../../assets/fundo-grade-digital.png";
import Perfil from "../../assets/perfil-curto.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigation = useNavigate();
  return (
    <div>
      <Header />
      <ContainerHome image={Image} />
      <ContainerInformationHome>
        <ContainerTitleInformation>
          <TitleInformation color="#0de6b2">Mobile</TitleInformation>
          <TitleInformation color="#ffffff">Developer</TitleInformation>
        </ContainerTitleInformation>
        <TextInformation>
          Sou um Desenvolvedor Mobile Júnior. Com uma sólida experiência em
          desenvolvimento de aplicativos móveis e um profundo conhecimento em
          React Native, dedico-me a criar aplicativos incríveis e de alto
          desempenho para iOS e Android, utilizando React Native.
        </TextInformation>
        <ButtonAbout onClick={() => navigation("/about")}>Sobre</ButtonAbout>
      </ContainerInformationHome>
      <ContainerPolygon>
        <ImagePolygon alt="Perfil" src={Perfil} />
      </ContainerPolygon>
    </div>
  );
};

export default Home;
