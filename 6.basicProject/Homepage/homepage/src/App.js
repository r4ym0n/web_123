import logo from './logo.svg';
import Layout from './layout/layout';
import Header from './layout/header';
import Footer from './layout/footer';
import MainPage from './views/mainPage';
import './App.css';

function App() {
  return (
    <Layout
      header={<Header/>}
      mainpage={<MainPage/>}
      footer={<Footer/>}
    >
      
    </Layout>      
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>
    // </div>
  );
}

export default App;
