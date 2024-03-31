import React from "react";

function Topbar() {
  return (
    <div id="TopBar">
      <div className="search-bar">
        <input id="search" type="text" placeholder="Search" />
        <img
          id="imgsearch"
          src="src\assets\Desktop14\search.png"
          alt="search icon"
          width={20.5}
          height={20.5}
        />
      </div>

      <div className="doctor">
        <p className="name">John Doe</p>
        <p className="category">General Doctor</p>
      </div>
      <div className="date">
        <p className="name">24 Oct 2022</p>
      </div>
      <div className="part2">
        <img
          src="src\assets\Desktop14\VectorMail.png"
          alt="Mail notification icon"
          className="mail"
        />
        <img
          src="src\assets\Desktop14\mi_notification.png"
          alt="Notification icon"
          className="message"
        />
        <img
          src="src\assets\Desktop14\ic_baseline.png"
          alt="Logout icon"
          className="logout"
        />
      </div>
    </div>
  );
}

export default Topbar;
