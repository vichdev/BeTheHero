import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogonContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'papayawhip')};
`;

export const SectionForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Forms

export const FormsLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  margin-top: 5em;
  margin-bottom: 2em;
`;

export const LinkRegister = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 1em;
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 650;
  color: black;
  margin-top: 3em;
  svg {
    font-size: 1.3em;
    color: #e02041;
    margin-right: 0.5em;
  }
  &:hover {
    color: #e02041;
    transition: ease 1s;
  }
`;

export const LinkLogin = styled(Link)`
  width: 100%;
  max-width: 400px;
  height: 3.5em;
  margin-top: 0.3em;
  background: #e02041;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  border: 0;
  &:hover {
    background: #df0e31;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: ease 0.3s;
  }
`;

export const ButtonLoginText = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 100%;
  color: #fff;
`;

// Imgs

export const LogoImg = styled.img`
  width: 100%;
  max-width: 350px;
  align-items: flex-start;
`;

export const HeroesImg = styled.img`
  -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
`;
