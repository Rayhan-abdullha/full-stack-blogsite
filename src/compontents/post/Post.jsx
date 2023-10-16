import { Link } from "react-router-dom";
import "./post.css";
import blog from "../../imgaes/blog.jpg";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postImages">
        {post.photo ? (
          <img className="postImg" src={post.photo} alt="notfound" />
        ) : (
          <img className="postImg" src={blog} alt="notfound" />
        )}
      </div>
      <div className="postInfo">
        <div className="postCats">
          <Link to={`?cat=${post.categories}`}>
            <span className="postCat">{post.categories}</span>
          </Link>
        </div>
        <Link to={`/post/${post.newId || post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
