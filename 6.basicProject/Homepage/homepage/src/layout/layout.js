import "./style.css";

function Layout(props) {
  return (
    <div className="layoutRoot">
      <div className="header">{props.header}</div>
      <div className="main">{props.mainpage}</div>
      <div className="footer">{props.footer}</div>
    </div>
  );
}

export default Layout;
