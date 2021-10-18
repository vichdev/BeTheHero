import React from 'react';
import * as Styles from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import ButtonLogin from '../../common/Button';
import InputForms from '../../common/Inputs';

function Register() {
  return (
    <Styles.RegisterContainer>
      <Styles.Content>
        <Styles.SectionRegister>
          <Styles.LogoImg src={LogoImg} alt="Logo Be The Hero" />
          <Styles.Title>Cadastro</Styles.Title>
          <Styles.Paragrafo>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos de sua ONG.</Styles.Paragrafo>
          <Styles.BackLink to="/">
            <FiArrowLeft />
            Voltar
          </Styles.BackLink>
        </Styles.SectionRegister>
        <Styles.FormRegister>
          <InputForms placeholder="Nome da ONG" />
          <InputForms placeholder="Email" type="email" />
          <InputForms placeholder="(XX) 9 XXXX-XXXX" type="tel" />
          <Styles.InputGroup>
            <InputForms width="75%" placeholder="Cidade" />
            <InputForms width="20%" placeholder="UF" />
          </Styles.InputGroup>
          <ButtonLogin name="Cadastrar" />
        </Styles.FormRegister>
      </Styles.Content>
    </Styles.RegisterContainer>
  );
}

export default Register;
