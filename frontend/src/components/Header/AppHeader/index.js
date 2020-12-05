import React from 'react'
import styled from 'styled-components'
import Flex from '../../Flex'
import { Logo, Avatar } from './styled'
import { Link } from "react-router-dom"
import { ReactComponent as NotificationIcon } from "../../Icons/Notification.svg"
import { ReactComponent as HelpIcon } from "../../Icons/Help.svg"


const Header = styled.header`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const HeaderContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`
const HeaderItems = styled(Flex)`
    ${props => props.mx && `margin: 0 ${props.mx * 4}px`}
`

const HeaderItem = styled(Flex)`
    margin-right: 18px;
    font-size: 15px;
`
const HeaderItemLink = styled(Link)`
    color: currentColor;
    text-decoration: none;
`

HeaderItem.defaultProps = HeaderItems.defaultProps = {
    alignItems: "center"
}

function AppHeader(props) {
    return (
        <Header>
            <HeaderContainer>
                <HeaderItems>
                    <HeaderItems>
                        <HeaderItem>
                            <HeaderItemLink to="/">
                                <Logo />
                            </HeaderItemLink>
                        </HeaderItem>
                    </HeaderItems>
                    <HeaderItems mx={3}>
                        <HeaderItem>
                            <HeaderItemLink to="/">Tablolar</HeaderItemLink>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderItemLink to="/">Şablonlar</HeaderItemLink>
                        </HeaderItem>
                    </HeaderItems>
                </HeaderItems>
                <HeaderItems>
                    <HeaderItem>
                        <HelpIcon />
                    </HeaderItem>
                    <HeaderItem>
                        <NotificationIcon />
                    </HeaderItem>
                    <HeaderItem>
                        <Avatar>
                            <img src="https://static.airtable.com/images/userIcons/user_icon_4@2x.png" alt="" />
                        </Avatar>
                    </HeaderItem>
                </HeaderItems>
            </HeaderContainer>
        </Header>

    )
}

export default AppHeader