import {Button, Container} from "@mui/material";
import "./index.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AnecdoteField from "./Components/AnecdoteField/AnecdoteField"
import {anecdotes} from "./anecdotes";
import {useState} from "react";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function App() {
  const random = Math.floor(Math.random() * anecdotes.length);
  const [visibleAnecdote, setVisibleAnecdote] = useState(anecdotes[random])

  const speak = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(visibleAnecdote))
  }

  return (
    <Container className="App">
      <h1>Рандомайзер анекдотов</h1>
        <AnecdoteField text={visibleAnecdote}/>
        <Button  variant="contained" onClick={() => {
          setVisibleAnecdote([anecdotes[random]])
        }} className="Button">Новый анекдот</Button>
        <Button  variant="contained" style={{margin: "16px"}} onClick={speak} className="button"><VolumeDownIcon/></Button>

      <p>Я знаю, что это выглядит, как говно.</p>
    </Container>
  );
}

export default App;
