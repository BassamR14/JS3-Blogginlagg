import { useState, useEffect } from "react";
import PostList from "./components/PostList/PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://dummyjson.com/posts");
      let data = await response.json();
      setPosts(data.posts);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Dev Blog</h1>
      <PostList data={posts} />
    </>
  );
}

export default App;
