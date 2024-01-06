import './App.css';
import Layout from './assets/Components/Layout/Layout';
import Footer from './assets/Components/Footer/Footer';
import Routes from './assets/Routes/Routes';
import NavBar from './assets/Components/NavBar/NavBar';


function App() {

  return (
      <Layout>
        <NavBar />
        <Routes />
        <Footer />
      </Layout>
  )
}

export default App
