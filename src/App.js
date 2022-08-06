import {Button, Container, TextField} from "@mui/material";
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
    <Container style={{fontFamily: "Roboto, sans-serif"}} className="App">
      <h1>Рандомайзер анекдотов</h1>
        <AnecdoteField text={visibleAnecdote}/>
      <div>
        <Button  variant="contained" style={{marginTop: "16px", marginRight: "16px"}} onClick={() => {
          setVisibleAnecdote([anecdotes[random]])
        }} className="Button">Новый анекдот</Button>
        <Button  variant="contained" style={{marginTop: "16px", marginRight: "16px"}} onClick={speak} className="button"><VolumeDownIcon/></Button>
      </div>

      {/*<div>*/}
      {/*  <TextField*/}
      {/*      style={{marginTop: "16px", width: "100%"}}*/}
      {/*      placeholder="Введите свой анекдот"*/}
      {/*      minRows={5}*/}
      {/*      maxRows={10}*/}
      {/*      />*/}
      {/*</div>*/}
      {/*  <Button  variant="outlined" style={{marginTop: "16px", marginRight: "16px"}} onClick={speak} className="button">Добавить свой анекдот</Button>*/}
        <h2>Здесь есть {anecdotes.length} анекдотов.</h2>
    </Container>
  );
}

export default App;
