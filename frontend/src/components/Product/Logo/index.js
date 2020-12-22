import React from 'react'
import { Link, Icon } from "@/components"
import { AppLogoIcon } from "@/components/Icons"

function Logo(props) {
    return (
        <Link to="/">
            <Icon fontSize="icon.default">
                <AppLogoIcon />
            </Icon>
        </Link>
    )
}

export default Logo