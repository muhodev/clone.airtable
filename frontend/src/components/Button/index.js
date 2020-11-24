import styled from 'styled-components'

const Button = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;

    padding: 10px 12px;
    border-radius: 4px;

    &[disabled] {
        opacity: .6;
        cursor: no-drop;
    }

`

export default Button