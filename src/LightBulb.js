import React, { Component } from "react";

class LightBulb extends Component {
  render() {
    return (
      <div>
        <svg
          width="350px"
          id="Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 285.5 305.5"
        >
          <defs />
          <path
            id="bulb"
            d="M229 147.5c0-51-44-91.5-96.5-86C93 66 61 97.5 56.5 137c-4 34 11.5 64.5 37 81.5 6 4 9 11 9 18V278a22.2 22.2 0 0 0 22 22h35a22.2 22.2 0 0 0 22-22v-41.5a22.73 22.73 0 0 1 9-18c24-15 38.5-41 38.5-71z"
            strokeWidth="11"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={this.props.lightSetting ? "on" : "off"}
          />
          <g id="lines">
            <path
              id="_Path_"
              data-name="&lt;Path&gt;"
              className="cls-2"
              d="M144.5 273.1H224"
              transform="translate(-41.5 -26.1)"
            />
            <path
              id="_Path_2"
              data-name="&lt;Path&gt;"
              className="cls-2"
              d="M103 270.5h79.5"
            />
          </g>
          <g id="bulbrays">
            <path
              id="_Path_3"
              data-name="&lt;Path&gt;"
              className={this.props.lightSetting ? "rays" : "cls-3"}
              d="M184 57.6v-26"
              transform="translate(-41.5 -26.1)"
            />
            <path
              id="_Path_4"
              data-name="&lt;Path&gt;"
              className={this.props.lightSetting ? "rays" : "cls-3"}
              d="M128.5 72.6c-4.5-7.5-8.5-15-13-22.5"
              transform="translate(-41.5 -26.1)"
            />
            <path
              id="_Path_5"
              data-name="&lt;Path&gt;"
              className={this.props.lightSetting ? "rays" : "cls-3"}
              d="M87 112.6c-7-4-14.5-8.5-21.5-12.5"
              transform="translate(-41.5 -26.1)"
            />
            <path
              id="_Path_6"
              data-name="&lt;Path&gt;"
              className={this.props.lightSetting ? "rays" : "cls-3"}
              d="M66.5 168.6H47"
              transform="translate(-41.5 -26.1)"
            />
            <path
              id="_Path_7"
              data-name="&lt;Path&gt;"
              className={this.props.lightSetting ? "rays" : "cls-3"}
              d="M240 72.6c4.5-7.5 8.5-15 13-22.5"
              transform="translate(-41.5 -26.1)"
            />
            <path
              id="_Path_8"
              data-name="&lt;Path&gt;"
              className={this.props.lightSetting ? "rays" : "cls-3"}
              d="M281.5 112.6c7-4 14.5-8.5 21.5-12.5"
              transform="translate(-41.5 -26.1)"
            />
            <path
              id="_Path_9"
              data-name="&lt;Path&gt;"
              className={this.props.lightSetting ? "rays" : "cls-3"}
              d="M302 168.6h19.5"
              transform="translate(-41.5 -26.1) "
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default LightBulb;
