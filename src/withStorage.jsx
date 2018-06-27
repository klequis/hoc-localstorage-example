import React from 'react';

const withStorage = (WrappedComponent) => {

  class HOC extends React.Component {
    
    get = (key) => {
      return localStorage.getItem(key); 
    }
    
    save = (key, data) => {
      localStorage.setItem(key, JSON.stringify(data));
    }
    
    remove = (key) => {
      localStorage.removeItem(key);
    }
    
    render() {
      return (
        <WrappedComponent
          get={this.get}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }
    
  return HOC; 
}

export default withStorage;