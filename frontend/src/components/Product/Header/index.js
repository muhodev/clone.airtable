import React from 'react'
import { Container } from "@/components"
import { Topbar, Altbar } from "./Components"

function Header(props) {
    return (
        <Container>
            <Topbar />
            <Altbar />
        </Container>
    )
}

export default Header