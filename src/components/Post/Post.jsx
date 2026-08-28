import style from "./Post.module.css";
import TagList from "../TagList/TagList";
import ReactionStats from "../ReactionStats/ReactionStats";

function Post({ data }) {
  const { body, id, reactions, tags, title, userId, views } = data;

  return (
    <>
      <div className={style.post}>
        <h2>{title}</h2>
        <TagList tags={tags} />

        <p> {body} </p>

        <ReactionStats
          likes={reactions.likes}
          views={views}
          commentCount={reactions.comments}
        />


        <button>Show User Information</button>
      </div>
    </>
  );
}

export default Post;
