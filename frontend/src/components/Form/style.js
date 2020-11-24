import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as VisibleIcon } from "../Icons/Visible.svg"
import { ReactComponent as VisibleOffIcon } from "../Icons/VisibleOff.svg"

export const LabelDescription = styled.p`
    color: #9599a8;
    font-size: 14px;
`
export const Label = styled.h5`
    font-size: 14px;
    padding-bottom: 8px;
`
export const InputGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.items ? props.items : "2"}, 1fr);
    grid-gap: 20px;
`

export const InputControl = styled.div`
    padding-top: 24px;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    padding:3px 8px;
    min-height: 38px;
    outline: 0;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;

    &:placeholder {
        color: grey;
    }
    &:focus {
        border-color: #2684FF;
        box-shadow: 0 0 0 1px #2684FF;
    }
`

const PasswordInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    span {
        display: flex;
        position: absolute; 
        right: 12px;
        font-size: 24px !important;
        color: #aaa;
        cursor:pointer;

        svg {
            font-size: inherit;
        }
    }
`

const PasswordInputEl = styled(Input)`
    padding-right: 14px;
`


export function PasswordInput(props) {
    const [isVisible, setVisible] = useState(false)
    return (
        <PasswordInputWrapper>
            <PasswordInputEl
                value={props.value}
                onChange={props.onChange}
                type={isVisible ? "text" : "password"}
                placeholder={props.placeholder || "Şifrenizi girin"} />
            <span onClick={setVisible.bind(this, !isVisible)}>

                {
                    isVisible ?
                        <VisibleOffIcon />
                        :
                        <VisibleIcon />

                }
            </span>

        </PasswordInputWrapper>
    )
}