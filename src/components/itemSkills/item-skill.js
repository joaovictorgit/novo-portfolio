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
      <IdentifierSkill>{typeSkill}</IdentifierSkill>
      <ContainerIcon>
        <img src={require(`../../assets/${icon}`)} alt="icon" />
      </ContainerIcon>
      <TitleSkill>{titleSkill}</TitleSkill>
      <ContainerSubtitle>
        <SubtitleSkill>{subtitle}</SubtitleSkill>
      </ContainerSubtitle>
    </ContainerItemSkills>
  );
};

export default ItemSkill;
