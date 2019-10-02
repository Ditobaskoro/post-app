import React from 'react'
import './detailpost.css'

class DetailPost extends React.Component {
  state = {
    post: null
  }

 
  componentDidMount = () => {
    const id = this.props.match.params.id
    
    fetch(`http://localhost:3001/posts/${id}`)
    .then(res => res.json())
    .then(post => {
      this.setState({post:post})
    })
    .catch(() => {
      alert('Api call Failed')
    })
    
  }

  render(){
    const { post } = this.state
    return (
      <div className="detail-container">
        <div className="detail-container__title">{post && post.title}</div>
        <div className="detail-container__author">{post && post.author}</div>
        <div className="detail-container__body">{post && post.body}</div>
      </div>
    )
  }
}

export default DetailPost