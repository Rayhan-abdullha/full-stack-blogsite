import React, { useState, useContext } from "react";
import "./write.css";
import { Context } from "../../context/Contex";
import { axiosInstance } from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MainLayout from "./../../layout/MainLayout";
import { key } from "./../../config/key";
import axios from "axios";
import { uniqueId } from "./../../utils/generateUinqueId";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const [selected, setSelected] = useState("others");

  const navigate = useNavigate();
  const { dispatch, user, allPosts } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      newId: uniqueId(),
      userName: user.userName,
      title,
      desc,
      photo: "",
      categories: categories || selected,
    };

    try {
      navigate("/");
      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        const fileUpload = await axios.post(
          `https://api.imgbb.com/1/upload?key=${key}`,
          formData
        );
        newPost.photo = fileUpload.data.data.display_url;
      }
      const res = await axiosInstance.post("/posts", newPost);
      console.log(res.data);
      newPost.newId = res?.data?._id;
      dispatch({ type: "ADD_POST", payload: newPost });
      toast.success("New Blog Created");
    } catch (err) {
      toast.error("Credential error");
      const allData = allPosts.filter((post) => post._id !== newPost.newId);
      dispatch({ type: "Add_BLOG_FAIL", payload: allData });
      navigate("/write");
    }
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
    setCategories(e.target.value);
  };
  return (
    <MainLayout>
      <div className="post-section">
        <div className="wrapper">
          <div className="title">Create your Blog</div>
          <form onSubmit={handleSubmit}>
            <div className="categorySelect">
              <p>Rayhan Abdullah</p>
              <select value={selected} onChange={handleChange} id="category">
                <option value="others">others</option>
                <option value="programming">programming</option>
                <option value="music">music</option>
                <option value="politics">politics</option>
                <option value="movies">movies</option>
              </select>
            </div>
            <div className="postInput">
              <input
                className="writeInput"
                id="title"
                autoFocus={true}
                type="text"
                placeholder="Write post title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                name=""
                id="description"
                cols="30"
                rows="10"
                placeholder="Tell me somthig..."
              ></textarea>
            </div>
            <div className="addImg">
              <input
                type="file"
                className="postAvator"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="submitBtn" type="submit">
              Post
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
