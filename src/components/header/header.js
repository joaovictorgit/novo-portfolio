import { useState } from "react";
import { ContainerHeader, TextMenu } from "./header-style";
import { useNavigate } from "react-router-dom";
import ContactModal from "../contactModal/contact-modal";
const Header = () => {
  const navigation = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ContainerHeader>
        <TextMenu onClick={() => navigation("/")}>Home</TextMenu>
        <TextMenu onClick={() => navigation("/portfolio")}>Portfolio</TextMenu>
        <TextMenu onClick={() => openModal()}>Contato</TextMenu>
      </ContainerHeader>
      <ContactModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
