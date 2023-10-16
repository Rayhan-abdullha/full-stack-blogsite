import "./posts.css";
import Post from "../post/Post";
import { useLocation } from "react-router";
import { useContext } from "react";
import { Context } from "../../context/Contex";
import { queryTransform } from "../../utils/utils";
export default function Posts() {
  const { isFetching, allPosts, error } = useContext(Context);
  const location = useLocation();
  let path = location.search;
  path = queryTransform(path);
  let posts = allPosts;
  if (path) {
    let cat = posts.filter((item) => item.categories == path);
    let author = posts.filter((item) => item.userName == path);
    if (author.length) {
      posts = author;
    } else {
      posts = cat;
    }
  }

  return (
    <div className="posts mb-5">
      {posts.length === 0 && <h4 className="empty_post">Empty Post List</h4>}
      {!error ? (
        posts.map((post) => <Post key={post._id || posts.newId} post={post} />)
      ) : (
        <div className="networkIssue">
          <p className="d-block">Server Issues!</p>
          <p className="d-block">Please Reload!</p>
        </div>
      )}
    </div>
  );
}
