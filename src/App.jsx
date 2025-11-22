import React from "react";
import BlogCard from "./components/BlogCard";
import "./components/Card.css";

export default function App() {
  return (
    <main>
      <BlogCard
        image="/assets/blogcar.png"
        avatar="/assets/avatar.female.png"
        category="HTML & CSS"
        title="Практична №3"
        description="Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з HTML та CSS."
        author="Стародубець Тарасr"
      />
    </main>
  );
}
