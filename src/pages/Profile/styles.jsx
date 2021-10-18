import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Header

export const ProfileContainer = styled.div`
  width: 100%;
  background-color: papayawhip;
  align-items: center;
`;

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-around;
`;
//Container ONG

export const ContainerONG = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 1.5em;
  color: #737380;
`;

//Container Button
export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogOff = styled(Link)`
  width: 72px;
  height: 74px;
  padding: 0.3em;
  margin-left: 0.5em;
  color: red;
  background: transparent;
  border: 0.5px solid #fff;
  border-radius: 20%;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #e02041;
    color: #fff;
    transition: ease 0.5s;
  }
`;

export const NewIncident = styled(Link)`
  width: 100%;
  max-width: 300px;
  padding: 2em;
  text-align: center;
  background: #e02041;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  border: 0;
  &:hover {
    background: #df0e31;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    transition: ease 0.3s;
  }
`;

//CASOS

export const TitleCases = styled.h1`
  margin-top: 100px;
  margin-bottom: 30px;
  margin-left: 120px;
`;

export const Posts = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 0;
  margin-bottom: 50px;

  justify-items: center;

  list-style: none;
`;

//IMGs

export const LogoImg = styled.img``;
