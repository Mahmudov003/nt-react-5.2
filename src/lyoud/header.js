import Feedback from "../feedback/feedback"; 
 
 function Header(props) {
  const {feedbacks} = props;
  return (
    <header className="header">
      <div className="nav-head">
        <div className="nav-item">
          <div className="nav_bar">
            <h2>6 Suggestions</h2>
            <h3>
              <span className="span">Sort by </span>: Most Upvotes
            </h3>
          </div>
          <button className="nav_button">+ Add Feedback</button>
        </div>
      </div>
      {/*  */}
      {feedbacks.map((feedback, index)=> {
      return <Feedback feedback={feedback} key={index}/>
      })}
    </header>
  );
}

export default Header;
