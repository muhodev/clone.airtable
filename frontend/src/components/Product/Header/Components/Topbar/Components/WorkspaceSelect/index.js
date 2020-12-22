import React from 'react'
import { Flex, Icon, Box } from "@/components/"
import { ExpandIcon } from "@/components/Icons"

function WorkspaceSelect(props) {
    return (
        <Flex alignItems="center">
            <Box mr={2}>
                {props.currentTable.title}
            </Box>
            <Icon fontSize="icon.xs">
                <ExpandIcon />
            </Icon>
        </Flex>
    )
}

export default WorkspaceSelect