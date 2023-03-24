import "./App.css";
import Axios from "axios";
import io from "socket.io-client";
import Chat from "./components/Chat";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8080");

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [group, setGroup] = useState("Main");
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    Axios.get("/groups").then((res) => {
      console.log('Axios res: ', res);
      // Do stuff with database response
      setGroupList(res.data);
      console.log('GROUP LIST ', groupList);

    }).catch(function(error) {
      console.log(error.toJSON());
    });

    socket.on("INITIAL_CONNECTION", (payload) => {
      console.log("Initial Connection");
      console.log(payload);
      setName(payload.name);
      setUsers(payload.users);
    });

    socket.on("receive_message", (payload) => {
      setMessages((prev) => [...prev, payload]);
      console.log("MESSAGES!!!!!: ", messages)
    });

    return () => {
      console.log("Unmounting...");
      socket.off("INITIAL_CONNECTION");
      socket.off("send_message");
      socket.off("receive_message");
    };
  }, []);

  // console.log('MESSAGES: ', messages);

  return (
    <div className="App">
      <Chat
        socket={socket}
        setMessage={setMessage}
        setMessages={setMessages}
        message={message}
        name={name}
        users={users}
        messages={messages}
        setGroup={setGroup}
        group={group}
        groupList={groupList}
      />
    </div>
  );
}

export default App;
