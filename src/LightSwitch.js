import React, { Component } from "react";

const lightOn = {
  width: "100%",
  backgroundColor: "yellow"
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
    console.log(this.state.lightSetting);
  };

  render() {
    return (
      <div
        className="lightSwitch"
        style={this.state.lightSetting ? lightOn : lightOff}
      >
        {this.state.lightSetting ? (
          <button onClick={this.handleClick}>ON</button>
        ) : (
          <button onClick={this.handleClick}>OFF</button>
        )}
      </div>
    );
  }
}

export default LightSwitch;
