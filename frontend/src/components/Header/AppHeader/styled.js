import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AppLogoIcon } from "../../Icons/AppLogo.svg"

const LogoWrapper = styled.div`
    color: #333;
    font-weight: 600;
    display: flex;
    align-items: center;

    svg {
        font-size: 24px;
        display: flex;
        align-items: center;
    }
`
const LogoText = styled.div`
    margin-left: 4px;
    font-size: 22px;
    font-weight: inherit;
`

export function Logo(props) {
    return (
        <LogoWrapper>
            <AppLogoIcon />
            <LogoText>
                Tuval
            </LogoText>
        </LogoWrapper>
    )
}

export const Avatar = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
    }
`