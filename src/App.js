import './App.css';
import Header from './Layout/Header';
import MainComponent from './Layout/Main';
import { Wrapper } from './Lib/Helpers';

function App() {
  let containerClass = "container vh-100 d-flex flex-column";
  let content;
  if (navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia) {
    content = (
      <Wrapper>
        <Header />
        <MainComponent />
      </Wrapper>
    );
  } else {
    containerClass += ' justify-content-center';
    content = (
      <Wrapper>
        <h2 class="display-4 mb-5">
          Unfortunatelly this browser is not compatible with the Dog Translator app.
        </h2>
        <p class="h3">
          Please try using the latest version of Firefox, Chrom or Edge.
        </p>
      </Wrapper>
    )
  }
  return (
    <div className={containerClass}>
      { content }
    </div>
  );      
}

export default App;
