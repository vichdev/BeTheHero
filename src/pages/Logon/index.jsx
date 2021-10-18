import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import * as Styles from './styles';
import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import InputForms from '../../common/Inputs';

function Logon() {
  return (
    <Styles.LogonContainer>
      <Styles.SectionForm>
        <Styles.LogoImg src={LogoImg} alt="Logo Be the Hero" />
        <Styles.FormsLogin>
          <Styles.LoginTitle>Faça seu Logon</Styles.LoginTitle>
          <InputForms placeholder="Sua ID" />
          <Styles.LinkLogin name to="/Profile">
            <Styles.ButtonLoginText>Entrar</Styles.ButtonLoginText>
          </Styles.LinkLogin>
          <Styles.LinkRegister to="/Register">
            <FiLogIn />
            Não tenho cadastro
          </Styles.LinkRegister>
        </Styles.FormsLogin>
      </Styles.SectionForm>
      <Styles.HeroesImg src={HeroesImg} alt="Heroes" />
    </Styles.LogonContainer>
  );
}

export default Logon;
