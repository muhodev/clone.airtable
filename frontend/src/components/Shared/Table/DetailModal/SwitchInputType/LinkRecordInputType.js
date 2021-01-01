import React from 'react'
import styled from 'styled-components'
import { Label } from "../style"
import { FieldLinkRecordIcon } from "@/components/Icons"
import { Icon } from "@/components"

const Style = styled.div``

const Input = styled.div`
    font-size: 14px;
    border: 2px solid #0000001a;
    padding: 12px 8px;
    font-weight: 500;
`

const RecordColumnNameLabel = styled.div`
    margin-bottom: 6px;
    font-size: 12px;
    line-height: 1;
    font-weight: 400;
    opacity: .5;
`

function LinkRecordInputType(props) {
    return (
        <Style>
            <Label>
                <Icon fontSize="icon.sm" color="icon.opac">
                    <FieldLinkRecordIcon />
                </Icon>
                <span>
                    {props.label}
                </span>
            </Label>
            <Input>
                <RecordColumnNameLabel>
                    İsim
                </RecordColumnNameLabel>
                {props.data}
            </Input>
        </Style>
    )
}

export default LinkRecordInputType