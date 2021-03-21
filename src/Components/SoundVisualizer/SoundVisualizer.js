import Wave from "@foobar404/wave";
import React from 'react';

class SoundVisualizer extends React.Component {

    componentDidMount() {
        //@TODO Wave.js issue: https://github.com/foobar404/Wave.js/issues/25
        let wave = new Wave();

        navigator.mediaDevices.getUserMedia({video: false, audio: true})
            .then(function (str) {
                wave.fromStream(str, "VisualizerCanvas", {
                    type: "bars blocks"
                });
            })
            .catch(function (err) {
                console.log(err.message)
            });
    }
    render() {
        return (
            <canvas id="VisualizerCanvas"></canvas>
        );
    }
}
export default SoundVisualizer;
