import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Home from './pages/Home/Home';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PressStart2P&display=swap');
  font-family: 'Press Start 2P', cursive;
    src: url('https://fonts.gstatic.com/s/pressstart2p/v10/e3t4euO8T-267oIAQAu6jDQyK3nRi0w.woff2') format('woff2');
    font-weight: normal;
  body {
    font-family: 'PressStart2P', cursive;
    margin: 0;
    padding: 0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="%23ccc" d="M0 0h10v10H0z"></path><path fill="%23fff" d="M10 10h10v10H10z"></path><path fill="%23ccc" d="M10 10h10v10H10z"></path><path fill="%23fff" d="M0 10h10v10H0z"></path></svg>');
    background-size: cover;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
