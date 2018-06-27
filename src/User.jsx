import React from 'react'
import withStorage from './withStorage'

const styles = {
  actions: {
    padding: '15px 0 15px 0'
  },
  button: {
    marginRight: '15px',
  },
  data: {
    maxWidth: '40%',
  },
  dataRow: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
  },
}

class User extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
  }

  onChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    this.setState({
      [key]: value
    })
  }

  saveDataClick = () => {
    this.props.save(
      'userData', 
      { 
        firstName: this.state.firstName,
        lastName : this.state.lastName,
        userName: this.state.userName
      }
    )
  }

  getDataClick = () => {
    const data1 = this.props.get('userData')
    const data2 = JSON.parse(data1)
    console.log('data2', data2)
    console.log('firstName', data2.firstName)
    this.setState({
      firstName: data2.firstName,
      lastName: data2.lastName,
      userName: data2.userName
    })
  }

  render() {
    console.log('props', this.props)
    const { firstName, lastName, userName } = this.state
    return (
      <div style={styles.wrapper}>
        <div style={styles.actions}>
          <button style={styles.button} onClick={this.getDataClick}>Get data</button>
          <button onClick={this.saveDataClick}>Save data</button>
        </div>

        <div style={styles.data}>
          <div style={styles.dataRow}>
            First Name: <input type='text' name='firstName' onChange={e => this.onChange(e)} value={firstName}/>
          </div>
          <div style={styles.dataRow}>
            Last Name: <input type='text' name='lastName' onChange={e => this.onChange(e)} value={lastName} />
            </div>
          <div style={styles.dataRow}>
            User Name: <input type='text' name='userName' onChange={e => this.onChange(e)} value={userName} />
          </div>
        </div>
      </div>
    )
  }
  
}
export default withStorage(User)