import "./style.css";
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <ul className="headerItem">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><div>C</div></li>
        <li><div>D</div></li>
      </ul>
      <div className="rightMenu">
        <div className="searchBox">
          <label>🔍</label>
          <div>Search the site</div>
        </div>
        <div className="topMenu">MENU</div>
      </div>
    </div>
  );
}

export default Header;
