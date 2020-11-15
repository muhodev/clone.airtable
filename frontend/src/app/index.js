import React from 'react'
import { Layout } from '../components'
import Table from '../components/Table'
import "../sass/index.scss"

function App(props) {
    return (
        <div id="root">
            <Layout>

                <h3>Tahsilatlar</h3>
                <Table />
            </Layout>
        </div>
    )
}

export default App