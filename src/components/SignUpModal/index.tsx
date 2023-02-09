import { AbButton, AbModal, AbTextField, ModalProps } from 'alurabooks-ds-gb';
import signup from './assets/signup.svg';
import { useState } from 'react';
import { ButtonWrapper, FormWrapper, Logo, LogoWrapper, ModalContentWrapper } from './SignUpModal.styles';

const SignUpModal = ({ open, onClose }: ModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <AbModal title="Cadastro" open={open} onClose={onClose}>
      <ModalContentWrapper>
        <LogoWrapper>
          <Logo
            src={signup}
            alt="Imagem de uma pessoa segurando uma chave em frente um monitor com a imagem de uma fechadura"
          />
        </LogoWrapper>
        <FormWrapper>
          <form>
            <AbTextField
              label="Nome"
              placeholder="Seu nome completo"
              inputType="text"
              value={name}
              onChange={setName}
            />
            <AbTextField
              label="Email"
              placeholder="seuemail@maneiro.com.br"
              inputType="email"
              value={email}
              onChange={setEmail}
            />
            <AbTextField
              label="Endereço"
              placeholder="Sua rua e número"
              inputType="text"
              value={address}
              onChange={setAddress}
            />
            <AbTextField
              label="Complemento"
              placeholder="Apto/casa, bloco, referência"
              inputType="text"
              value={address2}
              onChange={setAddress2}
            />
            <AbTextField
              label="CEP"
              placeholder="Apto/casa e bloco"
              inputType="text"
              value={zipCode}
              onChange={setZipCode}
            />
            <AbTextField
              label="Senha"
              placeholder="************"
              inputType="password"
              value={password}
              onChange={setPassword}
            />
            <AbTextField
              label="Confirmar senha"
              placeholder="************"
              inputType="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
            <ButtonWrapper>
              <AbButton>Cadastrar</AbButton>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </ModalContentWrapper>
    </AbModal>
  );
};

export default SignUpModal;
