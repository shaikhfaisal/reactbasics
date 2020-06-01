import { BasicTable } from "./BasicTable";
import { SearchBox } from "./SearchBox";
import * as React from "react";
import * as ReactDOM from "react-dom";

interface EnhancedTableProps {}
interface EnhancedTableState {
  searchText: string;
  sortColumns: SortColumns;
  data: TabularData;
}
type SortColumns = {
  [key: number]: string;
};

type TabularData = {
  headers: HeaderRow;
  rows: PersonRows;
};

type HeaderRow = Array<Header>;

type Header = {
  name: string;
};

type PersonRows = Array<Person>;

type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

export class EnhancedTable extends React.Component<
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
      data: {
        headers: [{ name: "Name" }, { name: "Age" }, { name: "Location" }],
        rows: [
          { id: 1, name: "Faisal", age: 39, city: "London" },
          { id: 2, name: "Aliya", age: 39, city: "London" },
          { id: 3, name: "Ibrahim", age: 7, city: "London" },
          { id: 4, name: "Hayaa", age: 5, city: "London" },
          { id: 5, name: "Fahd", age: 36, city: "Portland" },
          { id: 6, name: "Fatima", age: 33, city: "Dubai" },
          { id: 7, name: "Sana", age: 34, city: "Dubai" },
        ],
      },
    };
  }
  render() {
    const data = {};
    return (
      <div>
        <SearchBox onChange={this.handleNewSearchText} />
        <BasicTable
          searchText={this.state.searchText}
          sortColumns={this.state.sortColumns}
          data={this.state.data}
          handleSortBy={this.handleSortBy}
        />
      </div>
    );
  }

  handleNewSearchText = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSortBy = (i: number) => {
    let data = this.state.data;
    switch (i) {
      case 0:
        data.rows.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case 1:
        data.rows.sort((a, b) => (a.age > b.age ? 1 : -1));
        break;
      case 2:
        data.rows.sort((a, b) => (a.city > b.city ? 1 : -1));
        break;
    }

    this.setState({ data: data });
  };
}
