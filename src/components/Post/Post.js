import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ post }) => {
  const { user, title, body, commentList } = post;

  return (
    <div className="postItem">
      <User user={user} />
      <h2>{title}</h2>
      <p>{body}</p>
      <CommentList commentList={commentList} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        suite: PropTypes.string,
        city: PropTypes.string,
        zipcode: PropTypes.string,
      }),
    }),
    title: PropTypes.string,
    body: PropTypes.string,
    commentList: PropTypes.arrayOf(
      PropTypes.object,
    ),
  }).isRequired,
};
