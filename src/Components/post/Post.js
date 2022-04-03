import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


const Post = () => {
  
  return (
    <section className="container">
    <Link to="/posts" className="btn">
      Back To Posts
    </Link>
    <PostItem showActions={false} />
    <CommentForm  />
    <div className="comments">
    <CommentItem />
    </div>
  </section>
  )
};

export default Post;