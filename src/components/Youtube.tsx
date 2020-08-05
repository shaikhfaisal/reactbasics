import * as React from "react";
import * as ReactDOM from "react-dom";

export class Youtube extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBox />
        <YourAccount />
        <LeftMenu />
        <VideoPlayer />

        <Comments />
        <Playlist />
        <Suggestions />

        <Comments />
      </div>
    );
  }
}
