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
  rows: DataRows;
};

type HeaderRow = Array<Header>;

type Header = {
  name: string;
};

type DataRows = Array<Data>;

type Data = {
  id: number;
};

class BasicTable extends React.Component<BasicTableProps, {}> {
  constructor(props: BasicTableProps) {
    super(props);
  }

  getRenderedRows() {
    var rows = [];
    const searchText = this.props.searchText.toLowerCase();
    this.props.data.rows.forEach((element) => {
      // If a search term is provided, this searches for the searchterm
      // in the data and excludes the row from being rendered if there
      // is no match.
      if (this.props.searchText) {
        let searchTextFound = false;
        for (let [k, v] of Object.entries(element)) {
          if (v.toString().toLowerCase().indexOf(searchText) >= 0) {
            searchTextFound = true;
            break;
          }
        }
        if (searchTextFound === false) {
          return;
        }
      }

      let row_tds = Object.keys(element).map((k) => {
        if (k == "id") {
          return;
        }
        return <td key={element.id + "-" + k}>{element[k]}</td>;
      });
      let row = <tr key={element.id}>{row_tds}</tr>;
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
