import * as React from "react";

export interface BasicTableProps {
  searchText: string;
  sortColumns: SortColumns;
  data: TabularData;
  handleSortBy: (i: number) => void;
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

class BasicTable extends React.Component<BasicTableProps, {}> {
  constructor(props: BasicTableProps) {
    super(props);
  }

  getRenderedRows() {
    var rows = [];
    const searchText = this.props.searchText.toLowerCase();
    this.props.data.rows.forEach((element) => {
      if (
        this.props.searchText &&
        element.name.toLowerCase().indexOf(searchText) == -1 &&
        element.city.toLowerCase().indexOf(searchText) == -1 &&
        element.age != parseInt(searchText)
      ) {
        return;
      }
      let row = (
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>{element.age}</td>
          <td>{element.city}</td>
        </tr>
      );
      rows.push(row);
    });

    return rows;
  }

  getRenderedHeaders() {
    let headers = [];
    this.props.data.headers.forEach((element, index) => {
      let header = (
        <th key={element.name} onClick={() => this.props.handleSortBy(index)}>
          {element.name}
        </th>
      );
      headers.push(header);
    });
    return headers;
  }
  render() {
    let rows = this.getRenderedRows();
    let headers = this.getRenderedHeaders();
    return (
      <table>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export { BasicTable };
