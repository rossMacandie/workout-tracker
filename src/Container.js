import React, {Component} from 'react';

import Input from './Input';
import Output from './Output';


class Container extends Component {
  state = {
    newItem:"",
    list: []
  }

  updateInput = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  addItem = () => {
    //create item with unique id
    const newItem = {
      id: Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items 
    const list = [...this.state.list];


    //add new item to list 
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ''
    })
  }

  deleteItem = (id) => {
    //copy current list items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList})
  }

  render(){
    return (
      <div className="Container">
        <h1>Workout Planner</h1>
        <div>
          Add Item...
          <br/>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={this.addItem}
          >
            Enter
          </button>
          <br/>
          <ul>
            {this.state.list.map((item, i) => {
              return (
                <li key={item.id} >
                  {item.value}
                  <button
                  onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
  
 
}

export default Container;
