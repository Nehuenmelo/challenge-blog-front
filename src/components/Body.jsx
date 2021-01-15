import React, { Fragment } from 'react'

import Title from './Home/Title'
import Home from './Home'
import FormPost from './FormPost'
import Post from './Post'
import EditFormPost from './EditFormPost'
import EditPost from './EditForm'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


const Body = () => {
    return (
        <Fragment>
            <Title />

            <Router>
                <div className="btn-group my-3">
                    <NavLink to="/" exact className="btn btn-light" activeClassName="active">Home</NavLink>
                    <NavLink to="/edit-post" exact className="btn btn-light" activeClassName="active">Editar Post</NavLink>
                </div>

                <Switch>
                    <Route path="/save-post" component={FormPost} />
                    <Route path="/edit-post" exact component={EditPost} />
                    <Route path="/post/id=:id" component={Post} />
                    <Route path="/edit-post/id=:id" component={EditFormPost} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>

        </Fragment>
    )
}

export default Body
