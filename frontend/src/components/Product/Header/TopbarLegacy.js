import React from 'react'
import styled from 'styled-components'
import { Flex, Logo } from '@/components'
import { HelpIcon, NotificationIcon, ExpandIcon } from "@/components/Icons"


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

function Topbar(props) {
    return (
        <Flex height={48} alignItems="center" justifyContent="space-between">
            <Logo />
            <Flex alignItems="center">
                <div>
                    Tahsilat Yönetimi
                        </div>
                <ExpandIcon />
            </Flex>
            <Flex alignItems="center">
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
            </Flex>
        </Flex>
    )
}

export default Topbar