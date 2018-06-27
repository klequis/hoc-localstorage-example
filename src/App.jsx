import React, { Component } from 'react';
import User from './User'

const styles = {
  wrapper: {
    padding: '20px 20% 20px 20%'
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <User />
      </div>
    )
  }
}

export default App;
