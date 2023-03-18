import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

function App() {
  return <div className="App">Hello there</div>;
}

export default App;
