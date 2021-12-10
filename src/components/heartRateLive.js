function heartRateLive(props) {
    const { bpm } = props;

    let classBpm = 'bpmNormal';

    if (bpm > 40 && bpm <= 70) {
        classBpm = 'bpmHigh';
    }
    if (bpm > 140 && bpm <= 200) {
        classBpm = 'bpmLow';
    }

    return (<p className={classBpm}>
            Rythme cardiaque :  {bpm}
        </p>
    )
}

export default heartRateLive;