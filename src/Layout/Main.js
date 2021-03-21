import SoundVisualizer from '../Components/SoundVisualizer/SoundVisualizer';

function MainComponent() {
  return (
    <main class="flex-grow-1 d-flex flex-column justify-content-around">
        <div className="screen">
          <SoundVisualizer />
        </div>
        <div className="controls">CONTROLS</div>
        <div className="speaker">SPEAKER</div>
    </main>
  );
}

export default MainComponent;
