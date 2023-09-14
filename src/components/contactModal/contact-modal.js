import Modal from "react-modal";
import {
  ButtonSubmit,
  CloseModal,
  FormModal,
  InputFormModal,
  TextAreaFormModal,
  TextFormModal,
} from "./contact-modal-style";
import { MdClose } from "react-icons/md";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#00000000",
    border: "none",
  },
};

Modal.setAppElement("#root");
const ContactModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <FormModal>
        <CloseModal onClick={() => closeModal()}>
          <MdClose size={25} color="#ffffff" />
        </CloseModal>
        <TextFormModal>Contato via e-mail</TextFormModal>
        <InputFormModal placeholder="Digite o título da mensagem" />
        <TextAreaFormModal placeholder="Digite a mensagem" />
        <ButtonSubmit>Enviar</ButtonSubmit>
      </FormModal>
    </Modal>
  );
};

export default ContactModal;
