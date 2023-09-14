import styled from "styled-components";

export const CloseModal = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  width: 496px;
  height: 333px;
  background: #05092b;
  border-radius: 20px;
`;

export const TextFormModal = styled.h1`
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 54px;
  color: #ffffff;
`;

export const InputFormModal = styled.input`
  width: 311px;
  height: 37px;
  background: #28314f;
  border-radius: 15px;
  border: none;
  text-indent: 10px;
  color: rgba(255, 255, 255, 0.5);
  outline: none;
  ::placeholder {
    text-indent: 10px;
  }
`;

export const TextAreaFormModal = styled.textarea`
  width: 311px;
  height: 107px;
  background: #28314f;
  border-radius: 15px;
  border: none;
  text-indent: 10px;
  color: rgba(255, 255, 255, 0.5);
  outline: none;
  line-height: 40px;
  ::placeholder {
    text-indent: 10px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 189px;
  height: 45px;
  background: #0026f0;
  border-radius: 25px;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  font-family: "Noto Sans Gujarati UI", sans-serif;
  font-weight: 600;

  &:hover {
    font-size: 18px;
  }
`;
