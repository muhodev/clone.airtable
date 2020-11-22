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


const AvatarImg = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
`

function Avatar(props) {
    if (props.src) {
        return <AvatarImg src={props.src} alt={props.alt || ""} />
    }
    return (
        <AvatarWrapper>
            {props.name}
        </AvatarWrapper>
    )
}


export default Avatar