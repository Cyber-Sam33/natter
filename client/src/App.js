import "./App.css";
import axios from "axios";
import io from "socket.io-client";
import Chat from "./components/Chat";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8080");

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on('INITIAL_CONNECTION', payload => {
      console.log('Initial Connection');
      console.log(payload);
      setName(payload.name)
      setUsers(payload.users)
    });

    return () => {
      console.log("Unmounting...");
      socket.off('INITIAL_CONNECTION');

    };
  }, []);

  return (


    <div className="App">
      <Chat socket={socket} setMessage={setMessage} message={message} name={name} users={users}/>
    </div>
  );
}


export default App;
