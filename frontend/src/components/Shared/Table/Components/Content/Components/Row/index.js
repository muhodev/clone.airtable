import React from 'react'
import styled from "styled-components"

import { Cell } from "../"

const Wrapper = styled.div`
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
`

function Row(props) {
    return (
        <Wrapper>
            <span style={{ width: "50px" }}>
                1
            </span>
            { props.columns.map((column, index) => (
                <Cell column={props.column} data={props.data[column.accessor]} index={index} />
            ))}
        </Wrapper>
    )
}

export default Row