import React from 'react'
import { Flex, Logo, Box } from "@/components"
import { PersonalActions, WorkspaceSelect } from './Components'

function Topbar(props) {
    return (
        <Flex height="48px" alignItems="center" justifyContent="space-between">
            <Logo />
            <Box>
                <WorkspaceSelect currentTable={{ title: "Tahsilat Yönetimi" }} />
            </Box>
            <Box>
                <PersonalActions />
            </Box>
        </Flex>
    )
}

export default Topbar