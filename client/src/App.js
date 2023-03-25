import "./App.css";
import Axios from "axios";
import io from "socket.io-client";
import Chat from "./components/Chat";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";

const socket = io.connect("http://localhost:8080");

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [group, setGroup] = useState("Main");
  const [groupList, setGroupList] = useState([]);
  const [page, setPage] = useState("LandingPage");

  useEffect(() => {
    Axios.get("/groups")
      .then((res) => {
        console.log("Axios res: ", res);
        // Do stuff with database response
        setGroupList(res.data);
        console.log("GROUP LIST ", groupList);
      })
      .catch(function(error) {
        console.log(error.toJSON());
      });

    socket.on("INITIAL_CONNECTION", (payload) => {
      console.log("Initial Connection");
      console.log(payload);
      setName(payload.name);
      setUsers(payload.users);
    });

    socket.on("receive_message", (payload) => {
      console.log("payload_____: ", payload);
      setMessages((prev) => [...prev, payload]);
    });

    return () => {
      console.log("Unmounting...");
      socket.off("INITIAL_CONNECTION");
      socket.off("send_message");
      socket.off("receive_message");
    };
  }, []);

  return (
    <div className="App">
      {page === "Chat" && (
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
        />)}
      {page === "LandingPage" && (<LandingPage setName={setName} name={name} socket={socket} setPage={setPage} />)}
    </div>
  );
}

export default App;
