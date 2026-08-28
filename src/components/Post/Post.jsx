import style from "./Post.module.css";
import TagList from "../TagList/TagList";
import ReactionStats from "../ReactionStats/ReactionStats";
import UserInfo from "../UserInfo/UserInfo";
import { useState } from "react";

function Post({ data }) {
  const { body, id, reactions, tags, title, userId, views } = data;

  const [show, setShow] = useState(false);

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


        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Show User Information
        </button>
        {show && <UserInfo props={userId} />}
      </div>
    </>
  );
}

export default Post;
