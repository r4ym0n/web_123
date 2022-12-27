import logo from "./logo.svg";
import Layout from "./layout/layout";
import MainPage from "./views/mainPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">

    //   </header>
    // </div>
  );
}

function About() {
  return (
    <Layout>
      <div className="Main">12312321</div>
    </Layout>
  );
}

function Home(props) {
  return (
    <Layout>
      <MainPage className="Main" />
    </Layout>
  );
}
export default App;
