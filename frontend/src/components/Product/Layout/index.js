import React, { Fragment } from "react"
import { ThemeProvider } from 'styled-components'
import { theme } from "@/components"

function Layout(props) {
    return (
        <ThemeProvider theme={theme}>
            <main>
                {
                    props.children
                }
            </main>
            <footer></footer>
        </ThemeProvider>
    )
}

export default Layout