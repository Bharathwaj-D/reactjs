  import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vibe <code>src/App.js</code> click below link .
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/c/beingbharath"
          target="_blank"
          rel="noopener noreferrer"
        >
          Being Bharath
        </a>
      </header>
    </div>
  );
}

export default App;
