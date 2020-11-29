import React from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import { ReactComponent as LogoIcon } from "../Icons/Logo.svg"
import { ReactComponent as HelpIcon } from "../Icons/Help.svg"
import { ReactComponent as NotificationIcon } from "../Icons/Notification.svg"
import { ReactComponent as ExpandIcon } from "../Icons/Expand.svg"




const TopbarWrapper = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled(Flex)`
svg {
    font-size: 24px;
}
`

const WorkspaceSelect = styled(Flex)`
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color: white;

    &:hover {
        opacity: .85;
    }

    svg {
        color: inherit;
        font-size: 12px;
        margin-left: 4px;
    }
`

const TopbarItems = styled(Flex)``
const TopbarItemGroup = styled(Flex)`
    margin-right: 8px;
    svg {
        font-size: 16px;
    }
`
const TopbarItem = styled(Flex)`
    margin-left: 4px;
    img {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
    }
`

Logo.defaultProps =
    WorkspaceSelect.defaultProps =
    TopbarItems.defaultProps =
    TopbarItemGroup.defaultProps =
    TopbarItem.defaultProps = {
        alignItems: "center"
    }


function Topbar(props) {
    return (
        <TopbarWrapper>
            <Logo>
                <LogoIcon />
            </Logo>
            <TopbarItems>
                <TopbarItemGroup>
                    <WorkspaceSelect>
                        <span>
                            Tahsilat Yönetimi
                        </span>
                        <ExpandIcon />
                    </WorkspaceSelect>
                </TopbarItemGroup>
            </TopbarItems>
            <TopbarItems>
                <TopbarItemGroup>
                    <TopbarItem>
                        <HelpIcon />
                    </TopbarItem>
                </TopbarItemGroup>
                <TopbarItemGroup>
                    <TopbarItem>
                        <NotificationIcon />
                    </TopbarItem>
                </TopbarItemGroup>
                <TopbarItemGroup>
                    <TopbarItem>
                        <img src="https://static.airtable.com/images/userIcons/user_icon_4@2x.png" alt="" />
                    </TopbarItem>
                </TopbarItemGroup>
            </TopbarItems>
        </TopbarWrapper>
    )
}

export default Topbar