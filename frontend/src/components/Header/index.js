import styled from "styled-components"
import React from 'react'
import { Link } from "react-router-dom"
import { Avatar } from "../"
import Container from "../Container"

const StyledLink = styled(Link)`
    color: currentcolor;
    text-decoration: none;
`

const HeaderContainer = styled(Container)`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
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
        <HeaderContainer>

            <HeaderItems>
                <h1>
                    <StyledLink to="/">
                        Logo
                    </StyledLink>
                </h1>
            </HeaderItems>
            <HeaderItems>
                <HeaderItem to="/kullanıcılar">Kullanıcılar</HeaderItem>
                <HeaderItem to="/raporlar" >Raporlar</HeaderItem>
                <HeaderItem to="/tahsilatlar">Tahsilatlar</HeaderItem>
                <HeaderItem to="/hedefler">Hedefler</HeaderItem>
                <HeaderItem to="?login=true">Giriş Yap</HeaderItem>

                {/* <HeaderItem to="/profil"><Avatar name="my" /></HeaderItem> */}
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header