import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import axios from "axios";

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ monsters: response.data });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodeux</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        {/* <input type="search" placeholder="Search Monsters" onChange={e => this.setState({ searchField: e.target.value })} /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
