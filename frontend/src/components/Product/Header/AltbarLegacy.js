import React from 'react'
import styled from 'styled-components'
import Flex from '@/components/Shared/Flex'

import {
    MenuListIcon,
    ExpandIcon, AddIcon, AppIcon, HistoryIcon
} from "@/components/Icons"


const AltbarWrapper = styled.div`
    height: 30px;
`

const AltbarContainer = styled(Flex)`
    height: 100%;
`

const AltbarItems = styled(Flex)`
    height: 100%;
    margin-right: 12px;
`
const AltbarItemGroup = styled(Flex)`
    height: 100%;
    opacity: 0.75;
    font-size: 14px;
    font-weight: 500;
    svg {
        font-size: 14px !important;
    }
    margin-right: 12px;
    cursor: pointer;

`

const AddTableButton = styled.div`
    opacity: .75;
    margin-left: 6px;
    svg {
        font-size: 12px;
    }
`

const AltbarTap = styled.div`
    min-width: 118px;
    width: 118px;
    padding: 0 10px;
    height: 100%;
    user-select: none;
    ${props => props.active ? `
        background-color: #fff;
        color: #4d4d4d;
        opacity: 1;
    `: `
        background-color: #0000001a;
        color: #fff;
        opacity: .75;
    `}
    font-weight: 500;
    font-size: 14px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-right: 2px;
    cursor: pointer;

    svg {
        font-size: 16px;
        margin-left: 8px;
        opacity: .75;
    }

    ${AltbarItemGroup} {
        margin-right: 0;
        display: flex;
        justify-content: center;
    }

`
const AltbarItem = styled(Flex)`
    padding-left: 4px;
`

const ShareButton = styled.div`
    border-radius: 9999px;
    color: #1283da;
    background-color: #fff;
    font-size: 13px;
    padding: 2px 8px;
    cursor: pointer;
`

AltbarItems.defaultProps =
    AltbarItemGroup.defaultProps =
    AltbarItem.defaultProps = {
        alignItems: "center"
    }



function Altbar(props) {
    return (
        <Flex>
            <AltbarItems>
                <AltbarItemGroup>
                    <MenuListIcon />
                    <AltbarItem>

                    </AltbarItem>
                </AltbarItemGroup>
            </AltbarItems>
            <AltbarItems flexAuto>
                <AltbarTap active>
                    <AltbarItemGroup>
                        <AltbarItem>
                            <span>Hedefler</span>
                        </AltbarItem>
                        <ExpandIcon />
                    </AltbarItemGroup>
                </AltbarTap>
                <AltbarTap>
                    <AltbarItemGroup>
                        <AltbarItem>
                            <span>Tahsilatlar</span>
                        </AltbarItem>
                        {/* <ExpandIcon /> */}
                    </AltbarItemGroup>
                </AltbarTap>
                <AltbarItemGroup>
                    <AddTableButton>
                        <AddIcon />
                        <AltbarItem></AltbarItem>
                    </AddTableButton>
                </AltbarItemGroup>
            </AltbarItems>
            <AltbarItems>
                <AltbarItemGroup>
                    <AltbarItem>
                        <ShareButton>
                            Paylaş
                            </ShareButton>
                    </AltbarItem>
                </AltbarItemGroup>
                <AltbarItemGroup>
                    <HistoryIcon />
                    <AltbarItem>Aktiviteler</AltbarItem>
                </AltbarItemGroup>
                <AltbarItemGroup>
                    <AppIcon />
                    <AltbarItem>Uygulamalar</AltbarItem>
                </AltbarItemGroup>
            </AltbarItems>
        </Flex>
    )
}

export default Altbar