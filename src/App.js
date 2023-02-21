import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
        <h2> React Weather App</h2>
        <h3>Weather Search Box</h3>

        <footer>
          Coded by Christina Lear,{" "}
          <a href="" target="_blank">
            {" "}
            open-sourced on GitHub and deployed by Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
