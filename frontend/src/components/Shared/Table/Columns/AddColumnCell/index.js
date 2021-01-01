import React from 'react'
import styled from 'styled-components'
import { ColumnCellWrapper } from "../ColumnCell/style"
import { Icon, Flex } from "@/components"
import { PlusIcon } from "@/components/Icons"

function AddColumnCell() {
    return (
        <ColumnCellWrapper style={{ width: "75px", justifyContent: "center" }}>
            <Icon fontSize="14px">
                <PlusIcon />
            </Icon>
        </ColumnCellWrapper>
    )
}

export default AddColumnCell