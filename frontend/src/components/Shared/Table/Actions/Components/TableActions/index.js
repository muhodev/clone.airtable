import React from 'react'
import { ActionButton, Text, Flex, Icon } from "@/components"
import {
    ListIcon,
    SettingIcon,
    PeopleIcon,
    HideIcon,
    FilterIcon,
    GroupIcon,
    SortIcon,
    SearchIcon
}
    from "@/components/Icons"

function TableActions(props) {
    return (
        <Flex>
            <ActionButton isQuiet>
                <Icon>
                    <ListIcon />
                </Icon>
                <Text>Tüm Hedefler</Text>
            </ActionButton>
            <ActionButton isQuiet>
                <Icon>
                    <SettingIcon />
                </Icon>
            </ActionButton>
            <ActionButton isQuiet>
                <Icon>
                    <PeopleIcon />
                </Icon>
            </ActionButton>
            <ActionButton isQuiet>
                <Icon>
                    <HideIcon />
                </Icon>
                <Text>Alanlar</Text>
            </ActionButton>
            <ActionButton isQuiet>
                <Icon>
                    <FilterIcon />
                </Icon>
                <Text>Filtre</Text>
            </ActionButton>
            <ActionButton isQuiet>
                <Icon>
                    <GroupIcon />
                </Icon>
                <Text>Grup</Text>
            </ActionButton>
            <ActionButton isQuiet>
                <Icon>
                    <SortIcon />
                </Icon>
                <Text>Sıralama</Text>
            </ActionButton>
            <ActionButton isQuiet>
                <Icon>
                    <SearchIcon />
                </Icon>
                <Text>Ara</Text>
            </ActionButton>
        </Flex>
    )
}

export default TableActions