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
          <div>
            <input></input>
            <button type="button" id="asd">
              Search
            </button>
          </div>
        </div>
        <div className={style.myphoto}>
          <img alt="a simple"></img>
        </div>
      </div>

      <div class={style.itemsPanel}>
        <div class={style.sectionTitle}>
          <h2> Feture Count</h2>
        </div>
        <CardPad>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardPad>
      </div>

      <div class={style.itemsPanel}>
        <div class={style.sectionTitle}>
          <h2> Feture Count</h2>
        </div>
        <CardPad>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardPad>
      </div>

      <div class={style.itemsPanel}>
        <div class={style.sectionTitle}>
          <h2> Feture Count</h2>
        </div>
        <CardPad style={{background: "linear-gradient(141.34deg, rgba(94, 68, 255, 0.627) 20.76%, rgba(246, 185, 59, 0.627) 75.09%)"}}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardPad>
      </div>
    </div>
  );
}

export default MainPage;
