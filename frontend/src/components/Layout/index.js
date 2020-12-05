import React, { Fragment, useState } from "react"

function Layout(props) {
    return (
        <Fragment>
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