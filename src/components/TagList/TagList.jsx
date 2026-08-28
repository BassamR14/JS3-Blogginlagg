import style from "./TagList.module.css";
function TagList ({ tags }) {
    return (
        <div className={style["tag-list"]}> 
            {tags.map((tag) => (
                <span key={tag} className={style["tag-pill"]}>
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default TagList;