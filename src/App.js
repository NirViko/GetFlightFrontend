import logo from "./logo.svg";
import "./App.css";
// import CardFlight from "./components/CardFlight";
// import Search from "./components/Search";
import Toobar from "./components/Toolbar/Toolbar";
import SearchContainer from "./components/SearchContainer/SearchContainer";
function App() {
  return (
    <>
      <Toobar />
      <SearchContainer />
      {/* <CardFlight /> */}
    </>
  );
}

export default App;
