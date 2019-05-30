import React, { Component } from "react";
import LightBulb from "./LightBulb";

const lightOn = {
  width: "100%"
};
const lightOff = {
  width: "100%",
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
        <LightBulb lightSetting={this.state.lightSetting} />
        <div className="lightbutton">
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
