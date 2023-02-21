import logo from "./logo.svg";
import "./App.css";
import "./Weather.js";
import Search from "./Search";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {" "}
          <Search />
        </h1>
        <Weather city="London" />
        <p> Coded by Lear Christina</p>
        <p>Coded by Lear Christina </p>
        <a href="https://github.com/ChristinaLear-coder/React_app">
          {" "}
          Open coded source
        </a>
      </header>
    </div>
  );
}
export default App;
