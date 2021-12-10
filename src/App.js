import logo from "./logo.svg";
import "./App.css";
import HeartRateLive from './components/heartRateLive';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Monitoring de rythme cardiaque</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <HeartRateLive/>
      </header>
    </div>
  );
}

export default App;
