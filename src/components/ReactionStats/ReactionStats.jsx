function ReactionStats({ likes, views, commentCount }) {
    const formatViews = (num) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
        return num;
    };

    return (
        <div className="reaction-stats">
        <span>{likes}</span>
        <span>{formatViews(views)} visningar</span>
        <span>{commentCount} kommentarer</span>
        </div>
    );
    }

export default ReactionStats;