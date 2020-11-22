import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from '../components'
import Loading from '../components/Loading'
import "../sass/index.scss"

const GlobalModal = lazy(() => import('../components/GlobalModal'))
const Hedefler = lazy(() => import("../pages/hedefler"))
const Tahsilatlar = lazy(() => import("../pages/tahsilatlar"))

function App(props) {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/">
                            Home Page
                        </Route>
                        <Route path="/hedefler" component={Hedefler} />
                        <Route path="/tahsilatlar" component={Tahsilatlar} />
                    </Switch>
                    <Route path="/" component={GlobalModal} /> {/*Login modal */}
                </Suspense>
            </Layout>
        </Router>

    )
}

export default App
