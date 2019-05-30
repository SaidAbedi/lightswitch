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

  handleClick = () => {
    this.setState({ lightSetting: !this.state.lightSetting });
  };

  render() {
    return (
      <div
        className="lightSwitch"
        style={this.state.lightSetting ? lightOn : lightOff}
      >
        <div className="lightbutton">
          <LightBulb lightSetting={this.state.lightSetting} />
          {this.state.lightSetting ? (
            <button onClick={this.handleClick}>ON</button>
          ) : (
            <button onClick={this.handleClick}>OFF</button>
          )}
        </div>
      </div>
    );
  }
}

export default LightSwitch;
