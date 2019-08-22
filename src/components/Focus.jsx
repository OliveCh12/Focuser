import React, { useState, useEffect } from "react";

// Import Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const Focus = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [achivements, setAchivements] = useState({
    total: 0,
    lists: ["Well Done", "Good", "I Like when you wait", "Loose your time"]
  });

  const today = new Date();

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function addXp() {
    const initial = { ...achivements };
    initial.total = initial.total + 10;
    setAchivements(initial);
    console.log(achivements);
  }

  useEffect(() => {
    let interval = null;
    document.title = `Focuser ${seconds}s`;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function TimeFormat(props) {
    let sec = props.num;
    let hours = Math.floor(sec / 3600);
    let min = Math.floor((seconds - hours * 3600) / 60);

    console.log(sec);
    if (sec < 3600) {
      return `${min} ${min <= 1 ? "minute" : "minutes"}`;
    } else if (sec >= 3600) {
      return `${hours} ${hours <= 1 ? "hour" : "hours"} ${min} min`;
    } else {
      return `${sec} seconds`;
    }
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>
          I want to stay focus for{" "}
          <strong>
            <TimeFormat num={seconds} />
          </strong>
        </h3>
        <p className="text-secondary">
          We are {moment(today).format("dddd, MMMM Do YYYY")}
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="formControlRange">Slide to the left or right</label>
            <Slider callback={val => setSeconds(val)} value={seconds} />
          </div>
        </form>

        {/* Button Sections */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mr-3" onClick={toggle}>
            {isActive ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button className="btn btn-dark" onClick={reset}>
            I give up
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card" style={{ height: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">Achivements :</h5>
            <ul>
              <li>
                <span className="badge badge-primary mr-2">+ 10 xp</span>Pas mal
                pour un mec qui est nul
              </li>
              <li>
                <span className="badge badge-primary mr-2">+ 10 xp</span>Tu vas
                finir pas devenir cool attention
              </li>
            </ul>
          </div>
          <div className="card-footer">
            You have <strong>{achivements.total} points</strong> -->{" "}
            <span className="badge badge-primary">
              {new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR"
              }).format(achivements.total / 1000)}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Slider({ callback, disabled = false, readOnly = false, value = 0 }) {
  return (
    <input
      className="form-control-range"
      type="range"
      min="60"
      max="7200"
      disabled={disabled}
      readOnly={readOnly}
      onChange={({ target: { value } }) => callback(value)}
      value={value}
    />
  );
}

export default Focus;
