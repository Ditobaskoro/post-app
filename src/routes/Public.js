import React from 'react'
import { Route } from 'react-router-dom'
import MainLayout from '../layouts/Main'

const Public = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return <MainLayout><Component {...props} /></MainLayout>
  }} />
)

export default Public



