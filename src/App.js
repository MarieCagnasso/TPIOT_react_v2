import logo from "./logo.svg";
import "./App.css";
import HeartRateLive from './components/heartRateLive';
import { useEffect, useState } from 'react';

function random() {
    return Math.floor(Math.random() * 160) + 40;
}
function App() {
    const [bpm, setBpm] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setBpm(random);
        }, 1000);
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <h1>Monitoring de rythme cardiaque</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <HeartRateLive bpm={bpm}/>
      </header>
    </div>
  );
}

export default App;
