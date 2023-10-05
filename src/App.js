import React from "react";
import "./App.css";
import UserIcon from "./assets/images/Application-User.svg"; // Make sure the path is correct

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="menu">
          <p className="items-menu">
            <span className="frame-avatar">
              <img
                className="item-avatar"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/292726387_1748984332120972_3920023126473528481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=RviXSqBOZQcAX9Ut66t&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfC4pYQQ_1rfGkWmKAtC3mflzvU5IIJnvTk8dnt9NAyk8g&oe=6523E08E"
                alt="avatar"
              />
            </span>
            <span className="item-title">Nguyễn Tân</span>
          </p>
          <p className="items-menu">
            <span className="">
              {/* Use the imported SVG component */}
              <img className="items" src={UserIcon} alt="Home Icon" />
            </span>
            <span className="item-title">About me</span>
          </p>
        </div>
      </header>
      <div className="app-container">
        <div className="post-items">
          <a className="items-menu" href="https://www.facebook.com/vantaan2002/">
            <span className="frame-avatar">
              <img
                className="item-avatar"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/292726387_1748984332120972_3920023126473528481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=RviXSqBOZQcAX9Ut66t&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfC4pYQQ_1rfGkWmKAtC3mflzvU5IIJnvTk8dnt9NAyk8g&oe=6523E08E"
                alt="avatar"
              />
            </span>
            <span className="item-title">Nguyễn Tân</span>
          </a>
          <span className="content-items">
            <img
              className="images"
              src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/256059145_1579858802366860_8713502511323926636_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=52f669&_nc_ohc=FhlBivnPRGQAX-nn2vz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfCX3n7-y0OMxi8AjKNBz9wBVXfZ7hpvfYDn4VVlOKXOKg&oe=6522BAC2"
              alt="images"
            />
          </span>
          <span className="text">10 tháng 11, 2021 </span>
        </div>
      </div>
    </div>
  );
}

export default App;
