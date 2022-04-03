import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = () => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`/profile/:p1`}>
        <img className="round-img" alt="" />
        <h4>Onur Yurdagelen</h4>
      </Link>
    </div>
    <div>
      <p className="my-1"></p>
      <p className="post-date">Posted on 3/23/2022 5:00 PM</p>
      <button
          
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
    </div>
  </div>
);



export default CommentItem;