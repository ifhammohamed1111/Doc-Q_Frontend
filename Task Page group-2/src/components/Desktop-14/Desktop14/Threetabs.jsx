import React from 'react'

function Threetabs() {
  return (
    <div className="threetabs">
    <div className="frame-64 ">
      <div className="heading">
        <p className="head-text">Offline Consultation</p>
        <img
          src="src\assets\Desktop14\expand.png"
          alt="expand"
          className="expandimg"
        />
      </div>
      <div className="">
        <div className="">
          <div className="count">101</div>
          <div className="offlineData">
            <img
              src="src\assets\Desktop14\uparrow.png"
              alt="uparrow"
              className="uparrow"
            />
            <p className="percentage">+3.11%</p>
            <img
              src="src\assets\Desktop14\graph.png"
              className="graph"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="frame-67 ">
      <div className="heading">
        <p className="head-text">Online Consultation</p>
        <img
          src="src\assets\Desktop14\expand.png"
          alt="expand"
          className="expandimg"
        />
      </div>
      <div className="">
        <div className="">
          <div className="count">96</div>
          <div className="onlineData">
            <img
              src="src\assets\Desktop14\arrow10.png"
              alt="uparrow"
              className="uparrow"
            />
            <p className="percentage">-20.9%</p>
            <img
              src="src\assets\Desktop14\graphonline.png"
              className="onlinegraph"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="frame-68">
      <div className="heading">
        <p className="head-text">Total Patients</p>
        <img
          src="src\assets\Desktop14\expand.png"
          alt="expand"
          className="expandimg"
        />
      </div>
      <div className="patientsData">
        <div className="count">197</div>
        <div className="patientWheel">
          <img
            src="src\assets\Desktop14\wheel.png"
            className="wheel"
            alt="PateientData"
          />

          <div className="innerText">
            <p className="text-black">
              101&nbsp;<span className="text-blue">Female</span>
            </p>
            <p className="text-black">
              86&nbsp;<span className="text-blue">Male</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Threetabs