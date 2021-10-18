import React from 'react';
import * as Styles from './styles';
import LogoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';
import Post from '../../common/Posts';

function Profile() {
  return (
    <Styles.ProfileContainer>
      <Styles.ContainerHeader>
        <Styles.ContainerONG>
          <Styles.LogoImg src={LogoImg} alt="Logo Be The Hero" />
          <Styles.Welcome>Bem vinda, APAD.</Styles.Welcome>
        </Styles.ContainerONG>
        <Styles.ContainerButtons>
          <Styles.NewIncident to="incidents/new"> Criar novo Caso </Styles.NewIncident>
          <Styles.LogOff to="/">
            <FiPower />
          </Styles.LogOff>
        </Styles.ContainerButtons>
      </Styles.ContainerHeader>

      <Styles.TitleCases>Casos Cadastrados</Styles.TitleCases>

      <Styles.Posts>
        <Post post="Cachorro Atropelado" description="O cachorro sofreu um acidente no Centro e precisa ser tratado." value="R$120,00"></Post>
        <Post post="Castração" description="O cachorro sofreu um acidente no Centro e precisa ser tratado." value="R$150,00"></Post>
        <Post post="Cachorro doente" description="O cachorro sofreu um acidente no Centro e precisa ser tratado." value="R$130,00"></Post>
        <Post post="Gato ferido" description="O gato sofreu um acidente no Centro e precisa ser tratado." value="R$150,00"></Post>
      </Styles.Posts>
    </Styles.ProfileContainer>
  );
}

export default Profile;
