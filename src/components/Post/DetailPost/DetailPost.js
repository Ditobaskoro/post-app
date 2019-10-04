import React from 'react'
import './detailpost.css'
import api from "../../../apis"

class DetailPost extends React.Component {
  state = {
    post: null
  }

 
  componentDidMount = () => {
    const id = this.props.match.params.id
    
    api.post.detail(id)
    .then(res => res && res.json())
    .then(data => {
      if (data) {
        this.setState({post:data})
      }
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