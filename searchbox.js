"use strict";

import React from '@babel/preset-react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("input", {
      id: "searchbox",
      onChange: this.props.onChange
    });
  }

}

export { SearchBox };