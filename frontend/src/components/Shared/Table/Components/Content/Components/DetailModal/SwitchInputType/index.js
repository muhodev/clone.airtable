import React from 'react'
import { Label } from "../style"
import { Icon } from "@/components"
import { FieldDateIcon, FieldTextIcon, FieldSelectIcon, FieldLinkRecordIcon } from "@/components/Icons"
import LinkRecordInputType from './LinkRecordInputType'


function SwitchInputType(props) {
    const { column, data } = props

    let inputData = data[column.accessor] || null

    switch (column.type) {
        case "text":

            return <Label>
                <Icon fontSize="icon.sm" color="icon.opac">
                    <FieldTextIcon />
                </Icon>
                <span>
                    {column.Header}
                </span>
            </Label>
        case "linkRecord":
            return <LinkRecordInputType data={inputData} label={column.Header} />

        case "select":
            return <Label>
                <Icon fontSize="icon.sm" color="icon.opac">
                    <FieldSelectIcon />
                </Icon>
                <span>
                    {column.Header}
                </span>
            </Label>

        case "date":
            return <Label>
                <Icon fontSize="icon.sm" color="icon.opac">
                    <FieldDateIcon />
                </Icon>
                <span>
                    {column.Header}
                </span>
            </Label>
        default:
            return null
    }
}

export default SwitchInputType