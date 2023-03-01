import React from "react";
import "./Post.css";

const post = ({ author_name, content, image, date, photo, nickname }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="header-user">
          <img className="photo-user" src={photo} alt="img" />
        </div>
        <p>{author_name}</p>
        <p>{nickname}</p>
        <p>{date}</p>
      </div>
      <p>{content}</p>
      <div className="post-img">
        <img className="post-img" src={image} alt="img" />
      </div>
      <div className="post-actions">
        <div className="comment">
          <img
            className="icon"
            src="#"
            alt=""
          />
          482
        </div>
        <div className="repost">
          <img
            className="icon"
            src="https://img.icons8.com/ios/256/repeat.png"
            alt=""
          />
          146
        </div>
        <div className="like">
          <img
            className="icon"
            src="https://img.icons8.com/ios/256/like.png"
            alt=""
          />
          887
        </div>
        <div className="download">
          <img
            className="icon"
            src="https://img.icons8.com/ios/256/download.png"
            alt=""
          />
          50
        </div>
      </div>
    </div>
  );
};

export default post;
