import React from "react";

export default function GroupListItem({ group, setGroup }) {
  return (
    <div>
      <a href="#" className="list-group-item list-group-item-action border-0">
        <div className="badge bg-success float-right"></div>
        <div className="d-flex align-items-start">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
            className="rounded-circle mr-1"
            alt="William Harris"
            width="40"
            height="40"
          />
          <input type="hidden" onClick={(event) => setGroup()} />
          <button className="btn btn-primary ml-3 btn-block">{group}</button>
          <div className="flex-grow-1 ml-3">
            <div className="small">
              <span className="fas fa-circle chat-online"></span>
            </div>
          </div>
        </div>
      </a>
      <hr />
    </div>
  );
}
