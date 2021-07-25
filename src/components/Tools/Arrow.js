import React, { Component } from "react";

class Arrow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        {this.props.Direction ? (
          <i
            data-icon-name="ChevronUp"           
            className="FabricMDL2Icons fright"
          >
            
          </i>
        ) : (
          <i
            data-icon-name="ChevronDown"          
            className="FabricMDL2Icons fright"
          >
            
          </i>
        )}
      </span>
    );
  }
}

export default Arrow;
