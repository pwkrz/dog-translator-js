import './App.css';
import Header from './Layout/Header';
import MainComponent from './Layout/Main';

function App() {
  return (
    <div className="container vh-100 d-flex flex-column">
      <Header />
      <MainComponent />
    </div>
  );
}

export default App;
