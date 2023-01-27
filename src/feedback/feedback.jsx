import feed from "../feedback/feedback.module.css";

const Feedback = (props) => {
  const { title, votes, description, tags } = props.feedback;
  return (
    <div className={feed.feedback}>
      <div className="feed_left">
      <i class="fa-solid fa-angle-up"></i>
        <span className="span_votes">{votes}</span>
      </div>
      <div className="feed_center">
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
        <button className="button_tags">{tags}</button>
      </div>
    </div>
  );
};

export default Feedback;
