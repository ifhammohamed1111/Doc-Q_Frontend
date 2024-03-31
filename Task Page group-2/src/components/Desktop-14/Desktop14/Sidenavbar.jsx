import React from 'react'

function Sidenavbar() {
  return (
    <div className="SideNavBar">
    <div>
      <h2 className="Text">MENU</h2>
      <div id="dashboard">
        <div className="pointer"></div>
        <li>
          <img
            src="src\assets\SideNavBar\dashboard.png"
            alt="Dashboard/"
          />
          Dashboard
        </li>
      </div>
      <li>
        <img
          src="src\assets\SideNavBar\VectorSchedule.png"
          alt="Schedule"
        />{" "}
        Schedule
      </li>
      <li>
        <img src="src\assets\SideNavBar\task.png" alt="Tasks" />
        Tasks
      </li>
      <li>
        <img src="src\assets\SideNavBar\people.png" alt="Patients" />
        Patients
      </li>
      <li>
        <img src="src\assets\SideNavBar\VectorMail.png" alt="messages" />
        Messages
        <span>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          <img src="src\assets\SideNavBar\Message.png" />
        </span>
      </li>
      <li>
        <img src="src\assets\SideNavBar\analytic.png" alt="analytics" />
        Analytics
      </li>
    </div>
    <div className="line"></div>
    <div className="SideNavBar1">
      <div>
        <h2 className="Text">GENERAL</h2>
        <div id="settings">
          <li>
            <img
              src="src\assets\SideNavBar\settings.png"
              alt="Settings"
            />
            Settings
          </li>
        </div>
        <div id="support">
          <li>
            <img
              src="src\assets\SideNavBar\VectorSupport.png"
              alt="Support"
            />
            Support
          </li>
        </div>
      </div>
    </div>
  </div>

    )
}

export default Sidenavbar