import { Button } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import TopHeadlines from "./Components/TopHeadlines/TopHeadlines";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button>CLick</Button>
      <TopHeadlines></TopHeadlines>
    </div>
  );
}

export default App;
