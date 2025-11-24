import React from "react";
import BlogCard from "./components/BlogCard";
import "./components/Card.css";
import avatar from "/assets/avatar.female.png";
import blogcar from "/assets/blogcar.png";

export default function App() {
  return (
    <main>
      <BlogCard
        image={blogcar}
        avatar={avatar}
        category="HTML & CSS"
        title="Практична №3"
        description="Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з HTML та CSS."
        author="Стародубець Тарасr"
      />
    </main>
  );
}
