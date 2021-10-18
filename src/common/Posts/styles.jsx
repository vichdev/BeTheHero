import styled from 'styled-components';

export const PostStrong = styled.strong`
  display: block;
  font-size: 22px;
  font-weight: none;
  color: #41414d;
`;

export const PostParagraph = styled.p`
  font-size: 16px;
  line-height: 21px;
  margin: 30px 0 30px 0;
  color: #737380;
`;

export const PostList = styled.li`
  width: 100%;
  max-width: 700px;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  background-color: #fff;
`;

export const DeletePost = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: 0;
  background: none;

  &:hover {
    opacity: 0.8;
  }
`;
