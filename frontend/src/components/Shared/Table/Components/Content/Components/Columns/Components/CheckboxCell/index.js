import React from 'react'
import { Flex } from "@/components"

function CheckboxCell() {
    return (
        <Flex width="50px" pl={2}>
            <input type="checkbox" />
        </Flex>
    )
}

export default CheckboxCell