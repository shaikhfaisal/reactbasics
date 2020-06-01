"use strict";

import { BasicTable } from "./components/BasicTable";
import * as React from "react";
import * as ReactDOM from "react-dom";

interface SearchBoxProps {
  onChange: (e) => void;
}

class SearchBox extends React.Component<SearchBoxProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <input id="searchbox" onChange={this.props.onChange} />;
  }
}

interface EnhancedTableProps {}

interface EnhancedTableState {
  searchText: string;
  sortColumns: SortColumns;
}

type SortColumns = {
  [key: number]: string;
};

class EnhancedTable extends React.Component<
  EnhancedTableProps,
  EnhancedTableState
> {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      sortColumns: {
        0: "asc",
        1: "asc",
        2: "asc",
      },
    };
  }

  render() {
    const data = {
      headers: [{ name: "Name2" }, { name: "Age" }, { name: "Location" }],
      rows: [
        { id: 1, name: "Faisal", age: 39, city: "London" },
        { id: 2, name: "Aliya", age: 39, city: "London" },
        { id: 3, name: "Ibrahim", age: 7, city: "London" },
        { id: 4, name: "Hayaa", age: 5, city: "London" },
        { id: 5, name: "Fahd", age: 36, city: "Portland" },
        { id: 6, name: "Fatima", age: 33, city: "Dubai" },
        { id: 7, name: "Sana", age: 34, city: "Dubai" },
      ],
    };

    return (
      <div>
        <SearchBox onChange={this.handleNewSearchText} />
        <BasicTable
          searchText={this.state.searchText}
          sortColumns={this.state.sortColumns}
          data={data}
        />
      </div>
    );
  }

  handleNewSearchText = (e) => {
    // let state = this.state;
    // state.searchText = e.target.value;
    // this.setState(state);
    this.setState({ searchText: e.target.value });
  };
}

const tableContainer = document.querySelector("div#table_container");
ReactDOM.render(<EnhancedTable />, tableContainer);
