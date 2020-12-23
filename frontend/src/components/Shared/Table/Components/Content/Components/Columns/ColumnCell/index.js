import React from 'react'

import { ColumnCellWrapper } from "./style"
import { Flex, Icon, Text } from "@/components"
import { ExpandIcon, FieldTextIcon, FieldSelectIcon, FieldLinkRecordIcon, FieldDateIcon } from "@/components/Icons"

const fields = {
    text: {
        icon: <FieldTextIcon />
    },
    select: {
        icon: <FieldSelectIcon />
    },
    linkRecord: {
        icon: <FieldLinkRecordIcon />
    },
    date: {
        icon: <FieldDateIcon />
    }
}

function ColumnCell(props) {
    return (
        <ColumnCellWrapper>
            <Flex pl={2}>
                <Icon fontSize="icon.sm" color="icon.opac">
                    {fields[props.column.type].icon}
                </Icon>
                <Text pl={1} fontSize="caption.primary">
                    {props.column.Header}
                </Text>
            </Flex>
            <Flex pr={2}>
                <Icon fontSize="icon.xs" color="icon.opac">
                    <ExpandIcon />
                </Icon>
            </Flex>
        </ColumnCellWrapper>
    )
}

export default ColumnCell