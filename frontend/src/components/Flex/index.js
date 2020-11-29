import styled from 'styled-components'


const Flex = styled.div`

    display: flex;
    ${props => props.alignItems && `align-items: ${props.alignItems};`}
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props => props.flexAuto && `flex: 1 1 auto;`}


`

export default Flex