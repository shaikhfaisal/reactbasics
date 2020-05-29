"use strict";

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSortHeader(i) {
    console.log("Sorting by " + i);
  }

  getRenderedRows() {
    let rows = [];
    const searchText = this.props.searchText.toLowerCase();
    this.props.data.rows.forEach((element) => {
      if (
        this.props.searchText &&
        element.name.toLowerCase().indexOf(searchText) == -1 &&
        element.city.toLowerCase().indexOf(searchText) == -1 &&
        element.age != searchText
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
        <th key={element.name} onClick={() => this.handleSortHeader(index)}>
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

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input id="searchbox" onChange={this.props.onChange} />;
  }
}

class EnhancedTable extends React.Component {
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
    let state = this.state;
    state.searchText = e.target.value;
    this.setState(state);
  };
}

const tableContainer = document.querySelector("div#table_container");
ReactDOM.render(React.createElement(EnhancedTable), tableContainer);
