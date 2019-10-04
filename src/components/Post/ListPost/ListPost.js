import React from 'react'
import './listpost.css'
import { withRouter } from 'react-router-dom'
import api from "../../../apis"

const ListItem = ({data, history}) => {
  return data.map(item => (
    <div className="list-item" key={item.id} onClick={() => history.push(`/posts/${item.id}`)}>
      <div className="list-item__title">{item.title}</div>
      <div className="list-item__author">{item.author}</div>
    </div>
  ))
}

class ListPost extends React.Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    api.post.list()
    .then(res => res && res.json())
    .then(data => {
      if (data) {
        this.setState({data:data})
      }
    })
  }

  render(){
    const { history } = this.props
    const { data } = this.state
    return (
      <div className="list-container">
        <ListItem data={data} history={history} />
      </div>
    )
  }
}

export default withRouter(ListPost)