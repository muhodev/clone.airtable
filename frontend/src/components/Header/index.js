import styled from "styled-components"
import React from 'react'
import { Avatar } from "../"
import Container from "../Container"

const HeaderContainer = styled(Container)`
    display: flex; 
    align-items: center;
    justify-content: space-between;
`

const HeaderItems = styled.div`
    display: flex;
    align-items: center;
`

const HeaderItem = styled.div`
    padding: 10px 20px;

    &:last-child {
        padding-right: 0;
    }
`

function Header(props) {
    return (
        <HeaderContainer>

            <HeaderItems>
                <h1>LOGO</h1>
            </HeaderItems>
            <HeaderItems>
                <HeaderItem>Kullanıcılar</HeaderItem>
                <HeaderItem>Dosyalar</HeaderItem>
                <HeaderItem>Tahsilatlar</HeaderItem>
                <HeaderItem>Hedefler</HeaderItem>
                <HeaderItem><Avatar name="my" /></HeaderItem>

            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header