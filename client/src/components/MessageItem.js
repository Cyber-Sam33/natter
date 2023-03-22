import React from "react";

export default function MessageItem({ name, message, time, group }) {

  const main = "https://cdn-icons-png.flaticon.com/512/4043/4043180.png";
  const sports = "https://cdn-icons-png.flaticon.com/512/857/857418.png";
  const music = "https://cdn-icons-png.flaticon.com/512/651/651717.png";
  const logos = { Main: main, Sports: sports, Music: music };

  return (
    <div className="chat-message-left pb-4">
      <div>
        <img
          src={logos[group]}
          className="rounded-circle mr-1"
          alt={name} // dynamically add name
          width="40"
          height="40"
        />
        <div className="text-muted small text-nowrap mt-2">{time}</div>
      </div>
      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
        <div className="font-weight-bold mb-1">
          {/* dynamicall add name below */}
          {name}
        </div>
        {/* correct message varibale added below */}
        {message}
      </div>
    </div>
  );
}
