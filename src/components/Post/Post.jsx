import style from "./Post.module.css";

function Post({ data }) {
  const { body, id, reactions, tags, title, userId, views } = data;

  return (
    <>
      <div className={style.post}>
        <h2>{title}</h2>
        <p> {body} </p>

        <button>Show User Information</button>
      </div>
    </>
  );
}

export default Post;
