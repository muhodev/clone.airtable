import React from 'react'
import { Logo, Flex, Container, Box } from "@/components"
import { TableActions, PersonalActions } from "./Components"

function Actions(props) {
    return (
        <Container>
            <Flex height="48px" alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Box pr={3}>
                        <Logo />
                    </Box>
                    <TableActions />
                </Flex>
                <PersonalActions />
            </Flex>
        </Container>
    )
}

export default Actions