import style from "./mainpage.module.css";
import CardPad from "../components/cardpad";
import Card from "../components/card";
function MainPage(props) {
  return (
    <div className={style.mainPage}>
      <div className={style.outline}>
        <div className={style.titleItem}>
          <h1 className={style.title}>
            Join <span>My Journey</span> Into The New Economy.
          </h1>
          <h2 class={style.Subtitle}>Keep up with Web3 and Crypto.</h2>
        </div>
        <div className={style.myphoto}>
            <img alt="a simple">
            </img>
        </div>
      </div>
      
    <CardPad>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        
    </CardPad>
      
    </div>
  );
}

export default MainPage;
