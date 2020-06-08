import { BasicTable } from "./BasicTable";
import { SearchBox } from "./SearchBox";
import * as React from "react";
import * as ReactDOM from "react-dom";

interface EnhancedTableProps {}
interface EnhancedTableState {
  searchText: string;
  sortColumns: SortColumns;
  sortAscending: boolean;
  data: TabularData;
}

type SortColumns = {
  [key: number]: string;
};

type TabularData = {
  headers: HeaderRow;
  rows: DataRows;
};

type HeaderRow = Array<Header>;

type Header = {
  name: string;
};

type DataRows = Array<Person>;

type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
  country: string;
  notes: string;
};

export class EnhancedTable extends React.Component<
  EnhancedTableProps,
  EnhancedTableState
> {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      sortAscending: true,
      sortColumns: {
        0: "asc",
        1: "asc",
        2: "asc",
      },
      data: {
        headers: [
          { name: "Name" },
          { name: "Age" },
          { name: "Location" },
          { name: "Country" },
          { name: "Notes" },
        ],
        rows: [
          {
            id: 1,
            name: "Faisal",
            age: 39,
            city: "London",
            country: "UK",
            notes: "",
          },
          {
            id: 2,
            name: "Aliya",
            age: 39,
            city: "London",
            country: "",
            notes: "Note 1",
          },
          {
            id: 3,
            name: "Ibrahim",
            age: 7,
            city: "London",
            country: "",
            notes: "",
          },
          {
            id: 4,
            name: "Hayaa",
            age: 5,
            city: "London",
            country: "",
            notes: "",
          },
          {
            id: 5,
            name: "Fahd",
            age: 36,
            city: "Portland",
            country: "",
            notes: "",
          },
          {
            id: 6,
            name: "Fatima",
            age: 33,
            city: "Dubai",
            country: "UAE",
            notes: "",
          },
          {
            id: 7,
            name: "Sana",
            age: 34,
            city: "Dubai",
            country: "",
            notes: "",
          },
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
    let direction_of_sort = 1;
    if (!this.state.sortAscending) {
      direction_of_sort = -1;
    }

    data.rows.sort((a, b) => {
      let values_a = Object.values(a);
      let values_b = Object.values(b);
      if (values_a[i + 1] > values_b[i + 1]) {
        return 1 * direction_of_sort;
      }
      return -1 * direction_of_sort;
    });

    this.setState({ data: data, sortAscending: !this.state.sortAscending });
  };
}
