import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Contex";
import { axiosInstance } from "../../config";
import { toast } from "react-toastify";
import "./dashbord.css";
const UserDashbord = () => {
  const { user, allPosts, dispatch } = useContext(Context);
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/posts/${id}`, {
        data: { userName: user.userName },
      });
      const allData = allPosts.filter(
        (post) => (post._id || post.newId) !== id
      );
      dispatch({ type: "DELETE_POST", payload: allData });
      toast.success("deleted post");
    } catch (err) {}
  };

  let posts = allPosts.filter((v) => v.userName === user.userName);

  return (
    <div className="container dashboard mb-5">
      <h2 className="my-3 text-danger">Posts Dashboard</h2>
      {posts.length !== 0 ? (
        <div className="postDashbord">
          {posts?.map((post) => (
            <div key={post._id} className="dashbordPost">
              <p>{post.title}</p>
              <div className="editBtn">
                <button
                  onClick={() => handleDelete(post._id ? post._id : post.newId)}
                >
                  Del
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty_dashbord">
          <p>Empty Dashboard Post</p>
        </div>
      )}
    </div>
  );
};

export default UserDashbord;
