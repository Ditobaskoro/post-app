import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PublicRoute from "./routes/Public";
import PostList from './components/Post/ListPost'
import DetailPost from './components/Post/DetailPost'
import NewPost from './components/Post/NewPost'
import Password from './components/Password'


function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={PostList} />
        <PublicRoute path="/posts/:id" component={DetailPost}/>
        <PublicRoute path="/new-post" component={NewPost} />
        <PublicRoute path="/password-generator" component={Password} />
      </Switch>
    </Router>
  );
}

export default App;
