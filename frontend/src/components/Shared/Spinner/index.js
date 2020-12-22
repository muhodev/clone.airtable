import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    to { -webkit-transform: rotate(360deg); }
`

const Spinner = styled.span`
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: ${rotate} 1s ease-in-out infinite;
    margin-left:8px;
`

export default Spinner