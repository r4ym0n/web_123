import "./style.css";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="layoutRoot">
      <Header/>
        {props.children}
      <Footer/>
    </div>
  );
}

export default Layout;



   
