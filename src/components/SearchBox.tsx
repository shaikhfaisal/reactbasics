import * as React from "react";
import * as ReactDOM from "react-dom";

interface SearchBoxProps {
  onChange: (e) => void;
}
export class SearchBox extends React.Component<SearchBoxProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return <input id="searchbox" onChange={this.props.onChange} />;
  }
}
