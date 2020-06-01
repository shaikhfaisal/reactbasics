import { BasicTable } from "./BasicTable";
import { SearchBox } from "./SearchBox";
import * as React from "react";
import * as ReactDOM from "react-dom";

interface EnhancedTableProps {}
interface EnhancedTableState {
  searchText: string;
  sortColumns: SortColumns;
}
type SortColumns = {
  [key: number]: string;
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
    };
  }
  render() {
    const data = {
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
