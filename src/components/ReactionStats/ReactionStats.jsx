import likeIcon from '../../assets/like.png';
import viewIcon from '../../assets/view.png';
import commentIcon from '../../assets/comment.png';

function ReactionStats({ likes, views, commentCount }) {
    const formatViews = (num) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
        return num;
    };

    return (
        <div className="reaction-stats">
        <span><img src={likeIcon} alt="likes" width="16" height="16" /> {likes} likes </span>
        <span><img src={viewIcon} alt="views" width="16" height="16" /> {formatViews(views)} views </span>
        <span><img src={commentIcon} alt="comments" width="16" height="16" /> {commentCount} comments </span>
        </div>
    );
    }

export default ReactionStats;