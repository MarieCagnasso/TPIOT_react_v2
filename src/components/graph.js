import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

export default function Graph(props) {
    const data = props.bpm;
    return (
        <LineChart width={1200} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis dataKey="heartrate"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="heartrate" stroke="#82ca9d" />
        </LineChart>
    );
}