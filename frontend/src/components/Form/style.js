import styled from 'styled-components'

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