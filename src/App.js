import logo from "./logo.svg";
import "./App.css";
import CardFlight from "./components/CardFlight";
import Search from "./components/Search";
import Toobar from "./components/Toolbar/Toolbar";
function App() {
  return (
    <>
      <Toobar />
      <Search />
      <CardFlight />
    </>
  );
}

export default App;
