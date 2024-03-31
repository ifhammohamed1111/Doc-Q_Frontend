import React from 'react'

function Frame53() {
  return (
    <section className="Frame53">
              <div className="Header">
                <h4>Upcoming schedule</h4>
                <div className="right-part">
                  <h4>New appointment</h4>
                  <div className="logo">
                    <img src="src\assets\Desktop14\plus.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="timeline">
                <ul>
                  <li className="active">08:00</li>
                  <div className="content">
                    <div className="timings">
                      <span className="completed">08:00</span>
                      <p>Rice Kotlin</p>
                    </div>
                    <div className="timings">
                      <span className="completed">08:20</span>
                      <p>Maya Adamu</p>
                    </div>
                    <div className="timings timings-active">
                      <img
                        className="polygon"
                        src="src\assets\Desktop14\Polygon 2.png"
                        alt=""
                      />
                      <span className="active">08:30</span>
                      <p>Bolaji Abdulraheem</p>
                      <p className="text">Upcoming</p>
                      <div className="arrow">
                        <img src="src\assets\Desktop14\uparrow.png" alt="" />
                      </div>
                    </div>
                    <div className="details">
                      <div className="patient">
                        <h4>Patient</h4>
                        <span>Bolaji Abdulraheem</span>
                      </div>
                      <div className="patient">
                        <h4>Time</h4>
                        <span>8:30 - 9:00</span>
                      </div>
                      <div className="patient">
                        <h4>Purpose</h4>
                        <span>General Checkup</span>
                      </div>
                      <div className="linegap"></div>
                      <div className="bottom">
                        <div className="icons">
                          <div className="icon">
                            <img src="src\assets\Desktop14\trash.png " alt="" />
                          </div>
                          <div className="icon">
                            <img src=" src\assets\Desktop14\user.png" alt="" />
                          </div>
                          <div className="icon">
                            <img src="src\assets\Desktop14\pencil.png" alt="" />
                          </div>
                        </div>
                        <div className="beginbtn">Begin appointment</div>
                      </div>
                    </div>
                  </div>
                </ul>
                <ul>
                  <li>09:00</li>
                  <div className="content">
                    <div className="timings">
                      <span>09:00</span>
                      <p>Abayomi Johnson</p>
                    </div>
                    <div className="timings">
                      <span>09:30</span>
                      <p>Rebecca Gifts</p>
                    </div>
                  </div>
                </ul>
                <ul>
                  <li>10:00</li>
                  <div className="content">
                    <div className="timings">
                      <span>10:00</span>
                      <p>ERC Report</p>
                    </div>
                    <div className="timings">
                      <span>10:30</span>
                      <p>RConsulation meeting</p>
                    </div>
                  </div>
                </ul>
                <ul>
                  <li>11:00</li>
                  <div className="content">
                    <div className="timings">
                      <span>11:00</span>
                      <p>Victory Jones</p>
                    </div>
                    <div className="timings">
                      <span>11:30</span>
                      <p>Board meeting</p>
                    </div>
                  </div>
                </ul>
              </div>
            </section>
  )
}

export default Frame53