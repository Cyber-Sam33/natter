import { React, useEffect, useState } from "react";
import GroupListItem from "./GroupListItem";
import MessageItem from "./MessageItem";

export default function Chat({
  socket,
  name,
  setMessage,
  setMessages,
  message,
  messages,
  setGroup,
  group,
  groupList,
}) {
  const [searchInput, setSearchInput] = useState("");

  const filteredItem = groupList.filter((groupItem) => {
    return groupItem.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const sendMessage = () => {
    setMessage("");

    if (message !== "") {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const current_time = `${hours}:${minutes}`;
      console.log("Current Time: ", current_time);

      setMessages((prev) => [
        ...prev,
        {
          name: name,
          message: message,
          time: current_time,
          group: group,
          sender: name,
        },
      ]);

      //gettting group_id from groups - intial axios request
      const filterId = groupList.filter((groupObj) => groupObj.name === group);

      socket.emit("send_message", {
        // name: name,
        message: message,
        time: current_time,
        group: group,
        sender: name,
        group_id: filterId[0].id,
      });
      console.log(message);
    }
  };

  return (
    <main className="content">
      <div className="container p-0">
        <h1 className="h3 mb-3">Messages</h1>

        <div className="card">
          <div className="row g-0">
            <div className="col-12 col-lg-5 col-xl-3 border-right">
              <div className="px-4 d-none d-md-block">
                <div className="d-flex align-items-center">
                  {/* Search input area */}
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Search..."
                      onChange={(event) => setSearchInput(event.target.value)}
                      value={searchInput}
                    />
                  </div>
                </div>
              </div>

              {/* Group list rendering */}
              {filteredItem.map((arrayGroup) => {
                return (
                  <GroupListItem
                    arrayGroup={arrayGroup}
                    setGroup={setGroup}
                    socket={socket}
                    key={arrayGroup.id}
                    setMessages={setMessages}
                    messages={messages}
                    groupList={groupList}
                  />
                );
              })}

              <hr className="d-block d-lg-none mt-1 mb-0" />
            </div>
            <div className="col-12 col-lg-7 col-xl-9">
              <div className="py-2 px-4 border-bottom d-none d-lg-block">
                <div className="d-flex align-items-center py-1">
                  <div className="position-relative">
                    {/* <img
                      src={image}
                      className="rounded-circle mr-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    /> */}
                  </div>
                  <div className="flex-grow-1 pl-3 fs-1">
                    <h3>{group}</h3>
                    <div className="text-muted small"></div>
                  </div>
                  <div>
                    <button className="btn btn-primary btn-lg mr-1 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-phone feather-lg"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </button>
                    <button className="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-video feather-lg"
                      >
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect
                          x="1"
                          y="5"
                          width="15"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                    </button>
                    <button className="btn btn-light border btn-lg px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-more-horizontal feather-lg"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="position-relative">
                <div className="chat-messages p-4">
                  {/* Individual chat messages */}

                  {/* List of messages which render in chat area */}

                  {messages.map((message) => {
                    return (
                      <MessageItem
                        key={message.name}
                        name={name}
                        message={message.message}
                        time={message.timestamp}
                        group={group}
                        groupList={groupList}
                        sender={message.sender}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Send button and message input field */}
              <div className="flex-grow-0 py-3 px-4 border-top">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    className="form-control"
                    placeholder="Type your message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                  <button onClick={sendMessage} className="btn btn-primary">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

<input type="button" value="Clear form"></input>;
