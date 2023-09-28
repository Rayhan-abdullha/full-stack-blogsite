import React, { useState, useContext, useEffect } from "react";
import "./singlePost.css";
import { useLocation } from "react-router";
import { Context } from "../../context/Contex";
import blog from "../../imgaes/blog.jpg";
import MainLayout from "./../../layout/MainLayout";
import { axiosInstance } from "../../config";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { allPosts } = useContext(Context);

  const PF = "https://blog-server-api-qr75.onrender.com/images/";
  useEffect(() => {
    // find method does not work, why i dont know,
    for (let i = 0; i < allPosts.length; i++) {
      if ((id, allPosts[i]._id)) {
        find = allPosts[i];
      }
    }
    if (find) {
      setSinglePost({ ...find });
    } else {
      const fetchPost = async () => {
        try {
          const res = await axiosInstance.get(`/posts/${id}`);
          find = res?.data?.data;
          setSinglePost({ ...find });
        } catch (e) {}
      };
      fetchPost();
    }
  }, [id]);
  return (
    <MainLayout>
      <div className="container singlePost">
        <div className="post_img">
          <img
            src={singlePost?.photo ? PF + singlePost?.photo : blog}
            alt="not found"
          />
        </div>
        <h1 className="mt-4">{singlePost?.title}</h1>
        <p className="authorName mt-4">
          Author:{" "}
          <span className="singlePostAuthor">{singlePost?.userName}</span>
        </p>
        <p className="mb-3">
          Topic:{" "}
          <span className="singlePostAuthor">{singlePost?.categories}</span>
        </p>
        <div className="post_info">
          <span className="postDate">
            {new Date(singlePost?.createdAt).toDateString()}
          </span>
        </div>
        <hr />
        <div className="description mt-5">
          <p>{singlePost?.desc}</p>
        </div>
      </div>
    </MainLayout>
  );
}
