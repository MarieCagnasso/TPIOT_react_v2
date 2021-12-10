import logo from "./logo.svg";
import "./App.css";
import HeartRateLive from './components/heartRateLive';
import { useEffect, useState } from 'react';

function random() {
    return Math.floor(Math.random() * 160) + 40;
}
function App() {
    const [bpms, setBpm] = useState([50]);

    useEffect(() => {
        setInterval(() => {
            setBpm((prev) =>{
                return [...prev, random()]
            });
        }, 1000);
    }, []);

    const bpm = bpms[bpms.length - 1 ];

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
