import React, { useState, useEffect, useContext } from "react";
import Header from "../../compontents/header/Header";
import Posts from "../../compontents/posts/Posts";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Contex";
import Categories from "../../compontents/categories/Categories";

export default function Home() {
  const { dispatch, allPosts, isFetching } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      if (!isFetching){
        const fetchPost = async () => {
          try {
            setLoading(true);
            const res = await axiosInstance.get("/posts");
            dispatch({ type: "FETCH_POST", payload: res.data });
            setLoading(false);
          } catch (e) {
            setLoading(false);
            dispatch({type: 'FETCH_FAIL'})
          }
        };
        fetchPost();
      }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="container home">
        <h2 className="posts_section">Read Posts</h2>
        <p className="post_sub">Enjoy all your favourite Blogs</p>
        <Categories />
        {!loading ? (
          <Posts />
        ) : (
          <div className="loading_spinner">
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Loading...</span>
            </button>
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm mx-2"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>
        )}
        {
          loading && <Posts/>
        }
      </div>
    </React.Fragment>
  );
}
