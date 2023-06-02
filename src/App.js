import "./App.css";
import RickAndMortyCharacters from "./Components/RickAndMortyCharacters/RIckAndMortyCharacters";
import { QueryClient, QueryClientProvider } from "react-query";

const queryCilent = new QueryClient();
function App() {
  return (
    <div className="App">
      <h1>Rick And Morty Characters</h1>
      <header className="App-header">
        <QueryClientProvider client={queryCilent}>
          <RickAndMortyCharacters />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
