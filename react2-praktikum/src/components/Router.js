import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Beranda from './pages/Beranda'
import Gallery from './pages/Gallery'
import HariBesar from './pages/Haribesar'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/haribesar" component={HariBesar} />
    </Switch>
)
export default Router;
