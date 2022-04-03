import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const PostItem = () => (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/:p1`}>
          <img className="round-img" alt="" />
          <h4>Onur Yurdagelen</h4>
        </Link>
      </div>
      <div>
        <p className="my-1"></p>
        <p className="post-date">Posted on 3/23/2022 5:04 PM</p>
  
        
          <Fragment>
            <button
            
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up" />{' '}
              <span><span>5</span></span>
            </button>
            <button
             
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/:p1`} className="btn btn-primary">
              Discussion{' '}
              {/* {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )} */}
            </Link>
              <button
             
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
            
          </Fragment>
        
      </div>
    </div>
  );
  export default PostItem;