import logo from "./logo.svg";
import "./App.css";
import HeartRateLive from './components/heartRateLive';
import { useEffect, useState } from 'react';
import Graph from './components/graph';

function random() {
    return Math.floor(Math.random() * 160) + 40;
}
function App() {
    const [bpms, setBpm] = useState([50]);

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + "h" + minutes +"m"+ seconds+"s"

    useEffect(() => {
        setInterval(() => {
            setBpm((prev) =>{
                const bpm = {
                    timestamp: time,
                    heartrate: random()
                }
                return [...prev, bpm]
            });
        }, 1000);
    }, []);

    const bpm = bpms[bpms.length - 1 ];

    return (
    <div className="App">
      <header className="App-header">
        <h1>Monitoring de rythme cardiaque</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <HeartRateLive bpm={bpm.heartrate}/>
        <Graph bpm={bpms}/>
      </header>
    </div>
  );
}

export default App;
