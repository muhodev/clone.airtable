import styled from 'styled-components'


const Flex = styled.div`

    display: Flex;
    ${props => props.alignItems && `align-items: ${props.aligItems};`}
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}


`

export default Flex