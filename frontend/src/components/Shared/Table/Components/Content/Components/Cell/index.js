import React from 'react'
import styled from "styled-components"

import { Box, Text } from "@/components"

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid #dde1e3;
    background-color: #fff;
    border-bottom: 1px solid #dde1e3;

`

function Cell(props) {
    return (
        <Wrapper style={{ width: "180px" }}>
            <Box pl="2">
                <Text fontSize="body.secondary">
                    {
                        props.data
                    }
                </Text>
            </Box>
        </Wrapper>
    )
}

export default Cell