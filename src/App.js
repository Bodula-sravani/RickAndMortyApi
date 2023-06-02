import logo from "./logo.svg";
import "./App.css";
import RickAndMortyCharacters from "./Components/RickAndMortyCharacters/RIckAndMortyCharacters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RickAndMortyCharacters />
      </header>
    </div>
  );
}

export default App;
