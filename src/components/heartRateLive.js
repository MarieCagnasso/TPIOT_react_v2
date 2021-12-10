function heartRateLive(props) {
    const { bpm } = props;

    if (!bpm){return (<p>Aucune valeurs</p>)}
    let classBpm = 'bpmNormal';
    if (bpm > 40 && bpm <= 70) {
        classBpm = 'bpmLow';
    }
    if (bpm > 140 && bpm <= 200) {
        classBpm = 'bpmLow';
    }

    return (<p>
            Rythme cardiaque :  <span className={classBpm}>{bpm}</span>
        </p>
    )
}

export default heartRateLive;