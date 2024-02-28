import logo from "./logo.svg";
import "./App.css";
import LongButton from "./components/LongButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LongButton
          label={"Button"}
          onClick={() => {
            alert("Hello!");
          }}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>test</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
