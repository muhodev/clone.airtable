import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../components'
import AppHeader from "../../components/Header/AppHeader"
import { ReactComponent as SearchIcon } from "../../components/Icons/Search.svg"
import { ReactComponent as PeopleIcon } from "../../components/Icons/People.svg"
import { ReactComponent as PlusIcon } from "../../components/Icons/Plus.svg"
import { ReactComponent as TrashIcon } from "../../components/Icons/Trash.svg"
import { ReactComponent as ExpandIcon } from "../../components/Icons/Expand.svg"
import { ReactComponent as BasicPlanIcon } from "../../components/Icons/BasicPlan.svg"
import { ReactComponent as MonetizationIcon } from "../../components/Icons/Monetization.svg"


import { Avatar } from '../../components/Header/AppHeader/styled'

const WorkSpaces = styled(Flex)`
    width: 90%;
    margin: 40px auto;
`

const WorkSpacesSidebar = styled.aside`
    width: 22%;
`

const WorkspaceSearchbar = styled.div`
    background-color: #0000000d;
    border-radius: 6px;
    color: #444;
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    font-size: 15px;
    margin-bottom: 24px;

    span {
        position: absolute;
        left: 8px;
        display: flex;
        align-items: center;
        svg {
            opacity: 0.5;
            color: #333;
            font-size: 13px;
        }
    }

    input {
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding-left: 12px;
    }
`

const WorkspaceSidebarItems = styled.div``
const WorkspaceSidebarItem = styled(Flex)`
    padding: 6px 8px;
    align-items: center;
    cursor: pointer;
    user-select: none;
    border-radius: 6px;
    margin-top: 6px;
    color: #444;
    
    &:hover {
        background-color: #0000000d;
    }
    svg {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        font-size: 14px;
        margin-left: 6px;
    }

`

const WorkspaceSidebarTitle = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 500;
    color: #444;
    opacity: 0.75;

    svg {
        font-size: 15px;
        cursor: pointer;
    }
`

const WorkSpacesContent = styled.div`
    width: 70%;
    margin-left: auto;
`

const Workspace = styled.div`
    width: 100%;
`

const WorkspaceHeader = styled(Flex)`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const WorkspaceHeaderItems = styled(Flex)`
    align-items: center;
`
const WorkspaceTitle = styled(Flex)`
    align-items: center;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        span {
            border-color: #444;
        }
        svg {
            opacity: 1;
        }
    }
    
    span {
        color: #444;
        font-size: 28px;
        font-weight: 600;
        margin-right: 6px;
        padding-bottom: 4px;
        border-bottom: 3px solid #0000001a;
    }

    svg {
        color: #444;
        opacity: .75;
        font-size: 15px;
    }
`

const Truncate = styled.div`
    display: flex;
    align-items: center;
    background: #0000000d;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 6px;
    cursor: pointer;

    span {
        color: #333;
        opacity: .75;
    }

    svg {
        font-size: 14px;
        margin-right: 4px;
    }
`

const BasicPlan = styled(Truncate)`
    svg {
        color: #fcb400;
    }

`

const Upgrade = styled(Truncate)`
    background-color: #ff6f2c;
    color: #fff;
    margin-left: 10px;
`

const Share = styled(Truncate)`
    background-color: #20c933;
    color: #fff;
`

const WorkspaceHeaderItem = styled.div`
    margin-right: 10px;
`

const Bases = styled.div`
    margin: 30px 20px; 
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`
const Base = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
`
const BaseIcon = styled.div`
    width: 82px;
    height: 82px;
    background-color: #2d7ff9;
    color: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        font-size: 42px;
    }
`
const BaseTitle = styled.div`
    margin-top: 18px;
    font-size: 14px;
    color: #333;
    text-align: center;
    opacity: .8

`

const AddBaseIcon = styled(BaseIcon)`
    background-color: #0000000d;
    color: #333;

    svg {
        font-size: 28px;
        opacity: 0.5;
    }
`



function Home(props) {
    return (
        <div>
            <AppHeader />
            <WorkSpaces>
                <WorkSpacesSidebar>
                    <WorkspaceSearchbar>
                        <span>
                            <SearchIcon />
                        </span>
                        <input placeholder="Bir çalışma alanı veya tablo arayın" />
                    </WorkspaceSearchbar>
                    <WorkspaceSidebarItems>
                        <WorkspaceSidebarTitle>
                            <span>
                                Çalışma Alanları
                            </span>
                            <PlusIcon />
                        </WorkspaceSidebarTitle>
                        <WorkspaceSidebarItem>
                            <PeopleIcon />
                            <span>BHB</span>
                        </WorkspaceSidebarItem>

                        <WorkspaceSidebarItem>
                            <TrashIcon />
                            <span>Çöp Kutusu</span>
                        </WorkspaceSidebarItem>
                    </WorkspaceSidebarItems>
                </WorkSpacesSidebar>
                <WorkSpacesContent>
                    <Workspace>
                        <WorkspaceHeader>
                            <WorkspaceHeaderItems>
                                <WorkspaceTitle>
                                    <span>
                                        BHB
                                    </span>
                                    <ExpandIcon />
                                </WorkspaceTitle>
                                <BasicPlan>
                                    <BasicPlanIcon />
                                    <span>
                                        Basit Plan
                                    </span>
                                </BasicPlan>
                                <Upgrade>
                                    Yükselt
                                </Upgrade>
                            </WorkspaceHeaderItems>
                            <WorkspaceHeaderItems>
                                <WorkspaceHeaderItem>
                                    <Avatar>
                                        <img src="https://static.airtable.com/images/userIcons/user_icon_4@2x.png" alt="" />
                                    </Avatar>
                                </WorkspaceHeaderItem>

                                <Share>
                                    Paylaş
                                </Share>
                            </WorkspaceHeaderItems>
                        </WorkspaceHeader>
                        <Bases>
                            <Base>
                                <BaseIcon>
                                    <MonetizationIcon />
                                </BaseIcon>
                                <BaseTitle>
                                    Tahsilat Yönetimi
                                </BaseTitle>
                            </Base>
                            <Base>
                                <AddBaseIcon>
                                    <PlusIcon />
                                </AddBaseIcon>
                                <BaseTitle>
                                    Yeni Tablo
                                </BaseTitle>
                            </Base>
                        </Bases>
                    </Workspace>
                </WorkSpacesContent>
            </WorkSpaces>
        </div>
    )
}

export default Home