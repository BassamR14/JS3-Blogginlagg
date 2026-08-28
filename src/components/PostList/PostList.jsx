import Post from "../Post/Post";
import style from "./PostList.module.css";

function PostList({ data }) {
  return (
    <>
      <div className={style.list}>
        {data.map((post) => (
          <Post data={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;
