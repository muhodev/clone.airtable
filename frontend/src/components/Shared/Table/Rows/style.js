import React from 'react'
import styled from 'styled-components'
import { ExpandFullIcon } from "@/components/Icons"
import { Icon } from "@/components"

const Wrapper = styled.div`
    border-radius: 50%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #d0f0fd;
    }
`

export function ModalExpandIcon() {
    return (
        <Wrapper>
            <Icon fontSize="icon.xs" color="#2750ae">
                <ExpandFullIcon />
            </Icon>
        </Wrapper>
    )
}