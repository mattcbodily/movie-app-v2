import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Movie from './Components/Movie/Movie';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/movie' component={Movie}/>
    </Switch>
)