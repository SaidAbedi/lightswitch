import React, { Component } from "react";
import LightBulb from "./LightBulb";

const lightOn = {
  width: "100%",
  heigh: "100vh"
};
const lightOff = {
  width: "100%",
  height: "100vh",
  backgroundColor: "black"
};

class LightSwitch extends Component {
  state = {
    lightSetting: false
  };

  handleOnClick = () => {
    this.setState({ lightSetting: true });
  };
  handleOffClick = () => {
    this.setState({ lightSetting: false });
  };

  render() {
    return (
      <div
        className="lightSwitch"
        style={this.state.lightSetting ? lightOn : lightOff}
      >
        <div className="lightbutton">
          <LightBulb lightSetting={this.state.lightSetting} />
          <button
            className={this.state.lightSetting ? "buttonOn" : "buttonOff"}
            onClick={this.handleOnClick}
          >
            ON
          </button>
          <button
            className={this.state.lightSetting ? "buttonOff" : "buttonOn"}
            onClick={this.handleOffClick}
          >
            OFF
          </button>
        </div>
      </div>
    );
  }
}

export default LightSwitch;
