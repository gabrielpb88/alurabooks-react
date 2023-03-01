import { AbButton, AbModal, AbTextField } from 'alurabooks-ds-gb';
import signup from '../../assets/signup.svg';
import { FormEvent, useState } from 'react';
import { FormWrapper, InputsWrapper, ModalContentWrapper, ModalFooter } from './styles';
import { Link } from 'react-router-dom';
import { http } from '../../http';
import { useSaveToken } from '../../hooks';

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const SignInModal = ({ open, onClose, onLogin }: SignInModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const saveToken = useSaveToken();

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = {
      email,
      senha: password,
    };

    http
      .post('/public/login', user)
      .then((response) => {
        saveToken(response.data.access_token);
        setEmail('');
        setPassword('');
        onClose();
        onLogin();
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          alert(error.response.data.message);
        } else {
          alert('Ocorreu um erro inesperado ao realizar o seu login!');
        }
      });
  };

  return (
    <AbModal title="Login" open={open} onClose={onClose}>
      <form onSubmit={onSubmitForm}>
        <ModalContentWrapper>
          <img
            src={signup}
            alt="Imagem de uma pessoa segurando uma chave em frente um monitor com a imagem de uma fechadura"
          />
          <FormWrapper>
            <InputsWrapper>
              <AbTextField
                value={email}
                onChange={setEmail}
                inputType="email"
                label="E-mail"
                placeholder="seuemail@maneiro.com.br"
              />
              <AbTextField
                value={password}
                onChange={setPassword}
                inputType="password"
                label="Senha"
                placeholder="************"
              />
            </InputsWrapper>
            <ModalFooter>
              <Link to={'#'}>Esqueci minha senha</Link>
              <AbButton>Fazer login</AbButton>
            </ModalFooter>
            <hr />
            <ModalFooter>
              <span>Ainda não tem uma conta?</span> <AbButton>Criar conta</AbButton>
            </ModalFooter>
          </FormWrapper>
        </ModalContentWrapper>
      </form>
    </AbModal>
  );
};
