import React from 'react';
import * as Styles from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import ButtonLogin from '../../common/Button';
import InputForms from '../../common/Inputs';

function NewIncident() {
  return (
    <Styles.RegisterContainer>
      <Styles.Content>
        <Styles.SectionRegister>
          <Styles.LogoImg src={LogoImg} alt="Logo Be The Hero" />
          <Styles.Title>Cadastrar Novo Caso</Styles.Title>
          <Styles.Paragrafo>Descreva seu caso detalhadamente para encontrar um heroi que possa resolver isso.</Styles.Paragrafo>
          <Styles.BackLink to="/Profile">
            <FiArrowLeft />
            Voltar
          </Styles.BackLink>
        </Styles.SectionRegister>
        <Styles.FormRegister>
          <InputForms placeholder="Titulo do Caso" />
          <Styles.TextArea placeholder="Detalhe seu caso aqui..." />
          <InputForms placeholder="Valor em Reais" type="value" />
          <ButtonLogin name="Cadastrar novo caso" />
        </Styles.FormRegister>
      </Styles.Content>
    </Styles.RegisterContainer>
  );
}

export default NewIncident;
