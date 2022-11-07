import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="headerItem">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </div>
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
