import {useState, useEffect} from "react";
import "./App.css";
function App() {
  const [template, setTemplates] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      setTemplates(data.data.memes)
  })}, []);
  return (
    <div className="App">
      <h1>Meme Ganerato</h1>
    </div>
  );
}

export default App;