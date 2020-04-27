import React, { Component } from "react";

class Reset extends Component {
  onResetDefaut = () => {
    this.props.onSettingDefault(true);
  };
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.onResetDefaut}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
