import "./App.css";
import axios from "axios";
import io from "socket.io-client";
import Chat from "./components/Chat";

const socket = io.connect("http://localhost:8080");

function App() {
  return (
    <div className="App">
      <Chat socket={socket}/>
    </div>
  );
}

export default App;
