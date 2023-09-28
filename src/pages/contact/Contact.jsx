import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./contact.css";
import MainLayout from "../../layout/MainLayout";
const contactInfo = [
  {
    name: "Facebook",
    color: "#fff",
    background: "#45629f",
    link: "https://www.facebook.com/profile.php?id=100069345762386",
    icon: <FaFacebook />,
  },
  {
    name: "Github",
    color: "#fff",
    background: "Black",
    link: "https://github.com/Rayhan-abdullha",
    icon: <FaGithub />,
  },
  {
    name: "Twitter",
    color: "#fff",
    background: "#1ab7ea",
    link: "https://twitter.com/rayhan_abdullha",
    icon: <FaTwitter />,
  },
  {
    name: "Linkedin",
    color: "#fff",
    background: "#c61d23",
    link: "https://www.linkedin.com/in/rayhan-abdullah-100956189/",
    icon: <FaLinkedin />,
  },
];

export default function Contact() {
  return (
    <MainLayout>
      <div className="container contact">
        <div className="socialIcon">
          <h3 className="mb-4">Stay Connected</h3>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              style={{
                background: `${item.background}`,
                color: `${item.color}`,
              }}
            >
              <a href={item.link} target="_blank">
                <i style={{ color: `${item.color}` }} className="topIcon">
                  {item.icon}
                </i>
              </a>
              <span>Follow Us</span>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
