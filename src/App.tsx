import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Viewer from "./components/Viewer";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import "./App.css";

// Keine Besonderen Redux-Funktionen
// Import und Bereitstellung der Componenten
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React &amp; Redux Toolkit Example</h1>
      </div>
      <Login />
      <Viewer />
      <ChangeColor />
      <header className="App-counter">
        <Counter />
      </header>
    </div>
  );
}

export default App;
