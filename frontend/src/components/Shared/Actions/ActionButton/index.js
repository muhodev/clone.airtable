import styled from 'styled-components'

const ActionButton = styled.button`
    min-width: 32px;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: currentColor;
    border: ${props => !props.isQuiet ? "1px solid" : "0"};
    box-sizing: border-box;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
    padding-left: 7px;
    padding-right: 7px;

    p {
        padding-left: 7px;
    }

    &:hover {
        background-color: rgba(0,0,0,0.05);
    }

    &:focus {
        ${props => props.isQuiet && "outline: 0;"}
    }
`

export default ActionButton