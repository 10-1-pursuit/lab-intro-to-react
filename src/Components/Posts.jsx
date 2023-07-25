import Post from "./Post";
import "./Posts.css";

// Posts.jsx

function Posts() {
  return (
    <>
      <ul>
        {" "}
        <h2>Posts</h2>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
      </ul>
    </>
  );
}

export default Posts;
