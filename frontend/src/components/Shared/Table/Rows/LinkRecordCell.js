import React from 'react'
import styled from 'styled-components'

const LinkRecord = styled.div`
    font-size: 12px;
    padding:3px 6px;
    display: inline-flex;
    border-radius: 3px;
    background-color: #e9eef9;
`

function LinkRecordCell(props) {
    return (
        <LinkRecord>
            {props.valueId}
        </LinkRecord>
    )
}

export default LinkRecordCell