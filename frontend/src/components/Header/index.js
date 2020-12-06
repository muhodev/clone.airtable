import styled from "styled-components"
import React from 'react'
import { Link } from "react-router-dom"
import { Avatar } from "../"
import Container from "../Shared/Container"
import Topbar from "./Topbar"
import Altbar from "./Altbar"

const StyledLink = styled(Link)`
    color: currentcolor;
    text-decoration: none;
`
const HeaderWrapper = styled.div`
    background-color: #1283da;
    color: #fff;
`

const HeaderContainer = styled(Container)`
    
`

const HeaderItems = styled.div`
    display: flex;
    align-items: center;
`

const HeaderItem = styled(StyledLink)`
    padding: 10px 20px;

    &:last-child {
        padding-right: 0;
    }
`


function Header(props) {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Topbar />
                <Altbar />
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header