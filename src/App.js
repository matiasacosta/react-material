import React, { Component } from 'react'
import NavBar from './components/NavBar'
import EmpleadoList from './components/EmpleadoList'
import Drawer from '@material-ui/core/Drawer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <EmpleadoList />
        <Drawer title="Test" visible={true}>
          <p>Some contents...</p>
        </Drawer> 
      </div>
    );
  }
}

export default App;
