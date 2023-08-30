import Header from "../../components/header/header";
import {
  ContainerAbout,
  ContainerAboutInformations,
  ContainerFormation,
  ContainerPolygon,
  ContainerSkills,
  ContainerTitle,
  ImagePolygon,
  Line,
  TitleInformations,
} from "./about-style";
import Image from "../../assets/fundo-grade-digital.png";
import ItemFormation from "../../components/itemFormation/item-formation";
import Formations from "../../services/formation.json";
import Perfil from "../../assets/perfil-curto.png";

const About = () => {
  return (
    <div>
      <Header />
      <ContainerAbout image={Image} />
      <ContainerAboutInformations>
        <ContainerFormation>
          <ContainerTitle>
            <TitleInformations>Formação</TitleInformations>
            <Line width="240px" />
          </ContainerTitle>
          {Formations.map((f) => (
            <ItemFormation
              key={f.id}
              formation={f.formation}
              institute={f.institute}
              status={f.status}
              statusColor={f.colorStatus}
              begin={f.begin}
              end={f.end}
            />
          ))}
          ;
        </ContainerFormation>

        <ContainerSkills>
          <ContainerTitle>
            <TitleInformations>Habilidades</TitleInformations>
            <Line width="255px" />
          </ContainerTitle>
        </ContainerSkills>
      </ContainerAboutInformations>
      <ContainerPolygon>
        <ImagePolygon alt="Perfil" src={Perfil} />
      </ContainerPolygon>
    </div>
  );
};

export default About;
