import {
  ContainerIcon,
  ContainerItemSkills,
  ContainerSubtitle,
  IdentifierSkill,
  SubtitleSkill,
  TitleSkill,
} from "./item-skill-style";

const ItemSkill = ({ icon, titleSkill, subtitle, typeSkill }) => {
  return (
    <ContainerItemSkills>
      <IdentifierSkill>Soft-skill</IdentifierSkill>
      <ContainerIcon>
        <img src={require(`../../assets/${icon}`)} alt="icon" />
      </ContainerIcon>
      <TitleSkill>Metodologias ágeis</TitleSkill>
      <ContainerSubtitle>
        <SubtitleSkill>asdaddddddddddddddddddsdsasdasdd</SubtitleSkill>
      </ContainerSubtitle>
    </ContainerItemSkills>
  );
};

export default ItemSkill;
