import { ContainerHeader, TextMenu } from "./header-style";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigation = useNavigate();
  return (
    <ContainerHeader>
      <TextMenu onClick={() => navigation("/")}>Home</TextMenu>
      <TextMenu>Portfolio</TextMenu>
      <TextMenu>Contact</TextMenu>
    </ContainerHeader>
  );
};

export default Header;
