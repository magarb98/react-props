import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const places = data.map((place) => {
    return <Card key={place.id} {...place} />;
  });
  return (
    <div className="App">
      <Nav />
      <div className="cards">{places}</div>
    </div>
  );
}

export default App;
