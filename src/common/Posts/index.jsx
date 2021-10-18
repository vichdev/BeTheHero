import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import * as Styles from './styles';

function Post(props) {
  return (
    <Styles.PostList>
      <Styles.PostStrong>Caso:</Styles.PostStrong>
      <Styles.PostParagraph>{props.post}</Styles.PostParagraph>
      <Styles.PostStrong>Descrição:</Styles.PostStrong>
      <Styles.PostParagraph>{props.description}</Styles.PostParagraph>
      <Styles.PostStrong>Valor:</Styles.PostStrong>
      <Styles.PostParagraph>{props.value}</Styles.PostParagraph>

      <Styles.DeletePost>
        <FiTrash2 />
      </Styles.DeletePost>
    </Styles.PostList>
  );
}

export default Post;
