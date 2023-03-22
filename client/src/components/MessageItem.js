import React from "react";

export default function MessageItem({ name, message, time, group, groupList }) {



  const logoObj = groupList.find((object) => object.name === group)

  return (
    <div className="chat-message-left pb-4">
      <div>
        <img
          src={logoObj.logo}
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
