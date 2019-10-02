import React from 'react'
import './listpost.css'
import { withRouter } from 'react-router-dom'

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
    fetch('http://localhost:3001/posts')
    .then(res => res.json())
    .then(data => {
      this.setState({data:data})
    })
    .catch(() => {
      alert('Api call Failed')
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