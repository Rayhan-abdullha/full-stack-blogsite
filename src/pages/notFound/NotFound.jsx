import React from "react";
import notFound from "../../imgaes/notFound.svg";
import "./notfound.css";
import MainLayout from "./../../layout/MainLayout";
export default function NotFound() {
  return (
    <MainLayout>
      <div className="notFound">
        <img src={notFound} alt="" />
      </div>
    </MainLayout>
  );
}
