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
        <div className="comment">482</div>
        <div className="repost">146</div>
        <div className="like">887</div>
        <div className="download">50</div>
      </div>
    </div>
  );
};

export default post;
