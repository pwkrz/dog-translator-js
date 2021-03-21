import Wave from "@foobar404/wave";

function SoundVisualizer() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
    }).catch( err => {
        console.log("u got an error:" + err)
    });
    let VisualizerCanvas = React.createRef();
    let [wave] = useState(new Wave());

    wave.fromElement("audio_element_id",VisualizerCanvas.current, {type:"bars"});
    return (
        <div>
            <canvas ref={VisualizerCanvas}></canvas>
        </div>
    );
}
export default SoundVisualizer;
