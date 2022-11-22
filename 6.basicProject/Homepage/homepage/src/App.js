import logo from "./logo.svg";
import Layout from "./layout/layout";
import Header from "./layout/header";
import Footer from "./layout/footer";
import MainPage from "./views/mainPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


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
  return     <Layout
  header={<Header />}
  mainpage={
    <div>12312321</div>
  }
  footer={<Footer />}
></Layout>;
}

function Home (props) {
  return (
    <Layout
    header={<Header />}
    mainpage={<MainPage />}
    footer={<Footer />}
  ></Layout>
  )
}
export default App;
