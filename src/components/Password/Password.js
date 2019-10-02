import React from 'react'
import './password.css'

class Password extends React.Component {
  
  state = {
    password: '',
  }

  onGenerate = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    const length = 12;
    const newPassword = Array(length).fill(chars).map(x => x[Math.floor(Math.random() * x.length)] ).join('')

    this.setState({
      password: newPassword
    })
  }

  render(){
    const { password } = this.state
    return (
      <div className="password-container">
        <input type="text" value={password} disabled/>
        <button onClick={this.onGenerate} >Generate Password</button>
      </div>
    )
  }
}

export default Password