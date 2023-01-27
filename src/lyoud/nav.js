function Nav() {
  return (
    <nav className="sitebar">
      <div className="sitebar-head site_left">
        <h1>Frontend Mentor</h1>
        <h3>Feedback Board</h3>
      </div>
      <div className="sitebar-buttons site_left">
        <button className="siteBnt">All</button>
        <button className="siteBnt">UI</button>
        <button className="siteBnt">UX</button>
        <button className="siteBnt">Enhancement</button>
        <button className="siteBnt">Bug</button>
        <button className="siteBnt">Feature</button>
      </div>
      <div className="sitebar-roadmap site_left">
        <div className="road_left">
          <h3>Roadmap</h3>
          <a href="#">View</a>
        </div>
        <div className="road_right">
          <ul className="road_ul">
            <li className="li"><span>Planned</span></li>
            <li className="li"><span>In-Progress</span></li>
            <li className="li"><span>Live</span></li>
          </ul>
          <ul className='road_ul-right'>
            <li>3</li>
            <li>2</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
