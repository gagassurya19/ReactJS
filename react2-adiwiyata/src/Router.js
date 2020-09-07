import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Beranda from 'scenes/Beranda'
import Gallery from 'scenes/Gallery'
import Kalender from 'scenes/Kalender'

const Router = () => (
    <Switch>
        <Route exact path = "/" component = { Beranda } />
        <Route path = "/gallery" component = { Gallery } />
        <Route path = "/kalender" component = { Kalender } />
    </Switch>
)

export default Router
