import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from '../components'
import Loading from '../components/Loading'
import Home from '../pages/home'
import SpaceId from '../pages/space/spaceId'
import "../sass/index.scss"

const GlobalModal = lazy(() => import('../components/GlobalModal'))

function App(props) {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/w/:workspaceId/:baseId" component={SpaceId} />
                    </Switch>
                    <Route path="/" component={GlobalModal} /> {/*Login modal */}
                </Suspense>
            </Layout>
        </Router>

    )
}

export default App
