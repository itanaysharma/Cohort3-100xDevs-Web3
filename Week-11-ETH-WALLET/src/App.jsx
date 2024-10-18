import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// #https://jsonplaceholder.typicode.com/posts
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Create an async function inside useEffect
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setPosts(json);
    };

    // Call the async function
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}> {post.title}</div>
      ))}
    </>
  );
}

export default App;
