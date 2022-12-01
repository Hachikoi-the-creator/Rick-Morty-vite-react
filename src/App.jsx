import CardsList from "./components/CardsList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const searchHandler = (ref) => {
    console.log("Searching for something!", ref);
  };

  return (
    <div className="appContainer">
      <SearchBar {...{ searchHandler }} />
      <CardsList />
    </div>
  );
}
