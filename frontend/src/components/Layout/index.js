import React, { Fragment } from "react"

function Layout(props) {
    return (
        <Fragment>
            <header></header>
            <main>
                {
                    props.children
                }
            </main>
            <footer></footer>
        </Fragment>
    )
}

export default Layout