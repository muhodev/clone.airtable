import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from '../components'
import Hedefler from '../pages/hedefler'
import Tahsilatlar from '../pages/tahsilatlar'
import "../sass/index.scss"

function App(props) {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/hedefler">
                        <Hedefler />
                    </Route>
                    <Route path="/tahsilatlar">
                        <Tahsilatlar />
                    </Route>
                    <Route path="/">
                        Home Page
                    </Route>
                </Switch>
            </Layout>
        </Router>

    )
}

export default App
