import React, { Fragment, useState } from "react"
import { Header } from "../"
import Container from "../Container"
import LoginModal from "../LoginModal"

function Layout(props) {
    const [isOpenLoginModal, setOpenLoginModal] = useState(false)
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