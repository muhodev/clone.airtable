import React, { Fragment } from "react"
import { Header } from "../"
import Container from "../Container"

function Layout(props) {
    return (
        <Fragment>
            <Header />
            <main>
                <Container>
                    {
                        props.children
                    }
                </Container>
            </main>
            <footer></footer>
        </Fragment>
    )
}

export default Layout