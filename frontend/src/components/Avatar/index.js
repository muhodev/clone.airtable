import React from 'react'
import styled from 'styled-components'

const AvatarWrapper = styled.div`
    padding: 8px;
    border-radius: 50%;
    background-color: #aaa8ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`

function Avatar(props) {
    return (
        <AvatarWrapper>
            {props.name}
        </AvatarWrapper>
    )
}


export default Avatar