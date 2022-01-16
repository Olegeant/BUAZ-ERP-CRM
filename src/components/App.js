import Logo from './Logo';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Header>
        <Logo />
      </Header>

      <div className="App">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>

      <Footer>
        <Logo />
      </Footer>
    </>
  );
}

export default App;
