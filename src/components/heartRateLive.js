function heartRateLive() {
    const bpm = Math.floor(Math.random()*160) + 40;
    return (<div>
            Rythme cardiaque :  {bpm}
        </div>
    )
}

export default heartRateLive;