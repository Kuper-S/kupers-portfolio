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
    background: #1d1f21;
  ${'' /* border: 30px solid #c0c0c0;
  border-radius: 25px;
  padding: 20px;
  box-shadow: inset 0px 0px 30px rgba(255, 255, 255, 0.2); */}
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
