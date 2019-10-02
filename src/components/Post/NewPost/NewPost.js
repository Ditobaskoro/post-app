import React from 'react'
import './newpost.css'
import Input from '../../commons/Input'

class NewPost extends React.Component {
  
  state = {
    field: {
      title: '',
      content: '',
      author: ''
    },
    error: '',
    data: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/posts')
    .then(res => res.json())
    .then(data => {
      this.setState({data:data})
    })
    .catch(() => {
      alert('Api call Failed')
    }) 
  }

  onChange = e => {
    const field = this.state.field
    field[e.target.name] = e.target.value
    this.setState({ field: field })
  }

  onSubmit = e => {
    e.preventDefault()
    const { title, content, author } = this.state.field
    const id = this.state.data.length + 1
    if (title && content && author) {
      fetch('http://localhost:3001/posts', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          "id": id,
          ...this.state.field
        })
      })
      .then(res => {
        if(res.status === 200 || res.status === 201){
          alert('Post Saved')
          this.props.history.push('/')
        } else {
          alert('Server error')
        }
        
      })
      .catch(() => {
        alert('Saving failed')
      })
    } else {
      this.setState({
        error: 'Please fill in all fields'
      })
    }
  }

  render(){
    const { title, content, author } = this.state.field
    return (
      <div className="post-container">
        <div className="post-title">Add a Post</div>
        <form onSubmit={this.onSubmit} className="post-form">
          <Input multiline={false} name="title" value={title} onChange={this.onChange}/>
          <Input multiline={true} name="content" value={content} onChange={this.onChange}/>
          <Input multiline={false} name="author" value={author} onChange={this.onChange}/>
          <div className="post-error">{this.state.error}</div>
          <button onClick={this.onSubmit} type="button">Add Post</button>
        </form>
      </div>
    )
  }
}

export default NewPost