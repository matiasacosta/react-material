import React, { Component } from 'react'
import NavBar from './components/NavBar'
import EmpleadoList from './components/EmpleadoList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <EmpleadoList />
      </div>
    );
  }
}

export default App;
