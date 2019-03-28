import React, { Component } from "react";
import List from "./List";
import List2 from "./List2";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      searchTerm: "",
      List2searchTerm: "",
      count: 0,
      List2Count: 0,
      term: "",
      items: [],
      list2Item: []
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      count: this.state.count + 1,
      term: "",
      searchTerm: "",
      items: [...this.state.items, this.state.term]
    });
  };
  searchOnChange = (typeList, event) => {
    console.log(typeList);
    if (typeList === "List1") {
      this.setState({ searchTerm: event.target.value });
    } else {
      this.setState({ List2searchTerm: event.target.value });
    }
  };
  //checkbox click event
  onCheckboxChange = (event, typeList, index) => {
    event.preventDefault();
    console.log("Checked" + index);
    if (typeList === "List1") {
      this.setState({
        List2Count: this.state.List2Count + 1,
        list2Item: [this.state.items[index], ...this.state.list2Item]
      });
      this.state.items.splice(index, 1);
      this.setState({
        count: this.state.count - 1,
        items: [...this.state.items]
      });
      //console.log("Checked" + items);
    } else {
      this.setState({
        count: this.state.count + 1,
        items: [this.state.list2Item[index], ...this.state.items]
      });
      // console.log(this.state.count);
      this.state.list2Item.splice(index, 1);
      this.setState({
        List2Count: this.state.List2Count - 1,
        list2Item: [...this.state.list2Item]
      });
    }
  };
  // searchingFor = term => {
  //   return function(x) {
  //     return x.toLowerCase().includes(term) || !term;
  //   };
  // };
  removeItem = (mindex, typeList) => {
    console.log("Remove: " + mindex);
    //const items = this.state.items.filter((item, index) => index !== mindex);
    if (typeList === "List1") {
      this.state.items.splice(mindex, 1);
      this.setState({
        items: [...this.state.items],
        count: this.state.count - 1
      });
    } else {
      this.state.list2Item.splice(mindex, 1);
      this.setState({
        list2Item: [...this.state.list2Item],
        List2Count: this.state.List2Count - 1
      });
    }
  };
  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.term}
            placeholder="Enter task"
            className="form-control m-2"
            onChange={this.onChange}
          />
          <button className="btn  btn-primary">Add</button>
        </form>
        <h4>List1 Items ({this.state.count})</h4>
        <section className="form-inline">
          <input
            type="text"
            className="form-control m-2"
            onChange={e => this.searchOnChange("List1", e)}
            value={this.state.searchTerm}
          />
        </section>
        <List
          items={this.state.items}
          //searchFor={this.searchingFor}
          search={this.state.searchTerm}
          delete={this.removeItem}
          onChkChange={this.onCheckboxChange}
        />
        <h4>List2 Items ({this.state.List2Count})</h4>
        <section className="form-inline">
          <input
            type="text"
            className="form-control m-2"
            onChange={e => this.searchOnChange("List2", e)}
            value={this.state.List2searchTerm}
          />
        </section>
        <List2
          items={this.state.list2Item}
          search={this.state.List2searchTerm}
          delete={this.removeItem}
          onChkChange={this.onCheckboxChange}
        />
      </div>
    );
  }
}

export default ToDoList;
