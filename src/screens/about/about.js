import Header from "../../components/header/header";
import {
  ContainerAbout,
  ContainerAboutInformations,
  ContainerCourses,
  ContainerFormation,
  ContainerMenuSkills,
  ContainerPolygon,
  ContainerSkills,
  ContainerTitle,
  ImagePolygon,
  Line,
  TitleInformations,
} from "./about-style";
import Image from "../../assets/fundo02.jpg";
import ItemFormation from "../../components/itemFormation/item-formation";
import Formations from "../../services/formation.json";
import Skills from "../../services/skills.json";
import Perfil from "../../assets/perfil-curto.png";
import ItemSkill from "../../components/itemSkills/item-skill";
import ItemCourses from "../../components/itemCourses/item-courses";

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
              description={f.description}
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
          <ContainerMenuSkills>
            {Skills.map((skill) => (
              <ItemSkill
                key={skill.id}
                icon={skill.icon}
                titleSkill={skill.titleSkill}
                subtitle={skill.subtitle}
                typeSkill={skill.typeSkill}
              />
            ))}
          </ContainerMenuSkills>
        </ContainerSkills>
        <ContainerTitle>
          <TitleInformations>Cursos</TitleInformations>
          <Line width="242px" />
        </ContainerTitle>
        <ContainerCourses>
          <ItemCourses />
        </ContainerCourses>
      </ContainerAboutInformations>
      <ContainerPolygon>
        <ImagePolygon alt="Perfil" src={Perfil} />
      </ContainerPolygon>
    </div>
  );
};

export default About;
