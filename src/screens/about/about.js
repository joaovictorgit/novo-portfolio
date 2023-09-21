import {
  BtnSocialNetWorks,
  ConstainerSocialNetWorks,
  ContainerAbout,
  ContainerAboutInformation,
  ContainerButtonCV,
  ContainerCourses,
  ContainerFormation,
  ContainerIconInfoCard,
  ContainerImageLogo,
  ContainerInfoCard,
  ContainerInfomationAbout,
  ContainerMenuSkills,
  ContainerOtherContacts,
  ContainerSkills,
  ContainerSubContacts,
  ContainerTitle,
  Line,
  LineHorizon,
  SubTextInfoCard,
  TextButtonCV,
  TextInfoCard,
  TextOtherContacts,
  TitleInformations,
} from "./about-style";
import Header from "../../components/header/header";
import Perfil from "../../assets/perfil.jpeg";
import Formations from "../../services/formation.json";
import ItemFormation from "../../components/itemFormation/item-formation";
import Skills from "../../services/skills.json";
import Courses from "../../services/courses.json";
import ItemSkill from "../../components/itemSkills/item-skill";
import ItemCourses from "../../components/itemCourses/item-courses";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/joaovictordev",
    color: "#0072b1",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/joaovictorgit",
    color: "#111",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/joaovictorfelix2001/?hl=pt-br",
    color: "#bc2a8c",
  },
];
const About = () => {
  return (
    <div>
      <Header />
      <ContainerAbout>
        <ContainerAboutInformation>
          <ContainerImageLogo image={Perfil} />
          <ConstainerSocialNetWorks>
            {socialNetworks.map((network) => (
              <BtnSocialNetWorks
                href={network.link}
                className="social-btn"
                id={network.name}
                key={network.name}
                color={network.color}
              >
                {network.icon}
              </BtnSocialNetWorks>
            ))}
          </ConstainerSocialNetWorks>
          <ContainerOtherContacts>
            <TextOtherContacts>Contatos adicionais</TextOtherContacts>
            <ContainerSubContacts>
              <ContainerInfoCard>
                <ContainerIconInfoCard>
                  <AiFillPhone color="#e93b81" />
                </ContainerIconInfoCard>
                <div>
                  <TextInfoCard>Telefone:</TextInfoCard>
                  <SubTextInfoCard>(88) 99610-9661</SubTextInfoCard>
                </div>
              </ContainerInfoCard>
              <ContainerInfoCard>
                <ContainerIconInfoCard>
                  <AiOutlineMail color="#6ab5b9" />
                </ContainerIconInfoCard>
                <div>
                  <TextInfoCard>Email:</TextInfoCard>
                  <SubTextInfoCard>
                    victoralmeida.0216@gmail.com
                  </SubTextInfoCard>
                </div>
              </ContainerInfoCard>
            </ContainerSubContacts>
          </ContainerOtherContacts>
          <ContainerButtonCV>
            <TextButtonCV>Dowload Currículo</TextButtonCV>
          </ContainerButtonCV>
        </ContainerAboutInformation>
        <Line />
        <ContainerInfomationAbout>
          <ContainerFormation>
            <ContainerTitle>
              <TitleInformations>Formação</TitleInformations>
              <LineHorizon />
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
              <LineHorizon />
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

          <ContainerCourses>
            <ContainerTitle>
              <TitleInformations>Cursos</TitleInformations>
              <LineHorizon />
            </ContainerTitle>
            {Courses.map((course) => (
              <ItemCourses
                key={course.id}
                date={course.date}
                duration={course.duration}
                institute={course.institute}
                name_course={course.name_course}
                image={course.image}
              />
            )).reverse()}
          </ContainerCourses>
        </ContainerInfomationAbout>
      </ContainerAbout>
    </div>
  );
};

export default About;

/*import Header from "../../components/header/header";
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
import Courses from "../../services/courses.json";
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
          {Courses.map((course) => (
            <ItemCourses
              key={course.id}
              date={course.date}
              duration={course.duration}
              institute={course.institute}
              name_course={course.name_course}
              image={course.image}
            />
          )).reverse()}
        </ContainerCourses>
      </ContainerAboutInformations>
      <ContainerPolygon>
        <ImagePolygon alt="Perfil" src={Perfil} />
      </ContainerPolygon>
    </div>
  );
};

export default About;
*/
