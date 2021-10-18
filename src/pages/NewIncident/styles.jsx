import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: papayawhip;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 4em;
  border-radius: 2em;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
`;

export const SectionRegister = styled.section`
  width: 100%;
  margin-right: 5em;
  max-width: 450px;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const Paragrafo = styled.p`
  font-size: 1.3em;
  color: #707060;
  margin-top: 1em;
  margin-bottom: 5em;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 400px;
`;

export const TextArea = styled.textarea`
  width: ${(props) => (props.width ? props.width : '100%')};
  max-width: 400px;
  height: 8em;
  margin-bottom: 0.5em;
  padding: 1.2em;
  text-decoration: none;
  border: 0;
  border-radius: 6px;
  box-shadow: 1px 1px 5px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 650;
  color: black;
  svg {
    font-size: 1em;
    color: #e02041;
    margin-right: 0.5em;
  }
  &:hover {
    color: #e02041;
    transition: ease 1s;
  }
`;

//IMGS

export const LogoImg = styled.img`
  width: 100%;
  max-width: 350px;
  align-items: flex-start;
`;
