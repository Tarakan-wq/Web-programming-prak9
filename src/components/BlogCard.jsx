import React from "react";
import "./Card.css"; // імпортуємо стилі, які лежать у цій же папці

export default function BlogCard({ image, avatar, category, title, description, author }) {
  return (
    <article className="card">
      <img src={image} alt="Blog header" className="card-image" />

      <div className="card-content">
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <span className="tag">{category}</span>
          <p className="date">Публікація 1 Вересня 2025</p>
        </div>

        <h2 className="title">{title}</h2>

        <p className="description">{description}</p>

        <div className="author">
          <img src={avatar} alt={author} className="avatar" />
          <span className="author-name">{author}</span>
        </div>
      </div>
    </article>
  );
}
