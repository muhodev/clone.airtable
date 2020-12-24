import React from 'react'
import { Text } from "@/components"
import CategoryCellLabel from "./CategoryCellLabel"
import LinkRecordCell from './LinkRecordCell'

function SwitchCell(props) {
    const { col, value } = props;

    switch (col.type) {
        case "select":
            return <CategoryCellLabel
                options={col.options}
                valueId={value}
            />
        case "linkRecord":
            return <LinkRecordCell
                valueId={value}
            />
        default:
            return <Text fontSize="13px">
                {
                    value
                }
            </Text>
    }
}

export default SwitchCell