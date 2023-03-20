import "./App.css";
import axios from "axios";
import io from "socket.io-client";
import Chat from "./components/Chat";
import { useEffect } from "react";

const socket = io.connect("http://localhost:8080");

function App() {

  useEffect(() => {
    socket.on('INITIAL_CONNECTION', payload => {
      console.log('Initial Connection');
      console.log(payload);
    });

    return () => {
      console.log("Unmounting...");
      socket.off('INITIAL_CONNECTION');

    };
  }, []);

  return (
    <div className="App">
      <Chat socket={socket} />
    </div>
  );
}


export default App;
