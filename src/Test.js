import React from "react";

const titleStyles = {
  fontSize: 16,
  color: "#bada55"
};

export default class Test extends React.Component {
  state = {
    list: ["Eggs", "Milk", "Bread"],
    counter: 3,
    text: ""
  };

  handleButtonClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.handleAddShopping();
    this.setState({ counter: this.state.list.length });
  };

  handleAddEnter = e => {
    if (e.key === "Enter") {
      this.handleAddShopping();
    }
  };

  handleAddShopping = () => {
    const currentList = this.state.list;
    const newList = currentList.concat(this.state.text);
    this.setState({
      list: newList,
      text: ""
    });
  };

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };

  handleRemove = (key) => {
    const currentList = this.state.list;
    const newList = currentList.filter((item, index) => index !== key)
    //list.splice(key, 1);
    this.setState({
      list: newList,
      counter: newList.length
    });
  };

  render() {
    return (
      <div>
        Count: {this.state.counter}
        <h3 style={titleStyles}>{this.props.title}</h3>
        <ul>
          {this.state.list.map((item, key) => (
            <li key={item}>
              {item}
              <button
                style={{ marginLeft: 10, backgroundColor: "red" }}
                onClick={() => this.handleRemove(key)}
              >X
              </button>
            </li>
          ))}
        </ul>
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          onKeyPress={this.handleAddEnter}
        />
        <button onClick={this.handleButtonClick}>Add</button>
      </div>
    );
  }
}
