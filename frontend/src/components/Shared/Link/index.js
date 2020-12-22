import styled from 'styled-components'
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
    text-decoration: ${props => props.isQuiet ? "none" : "underline"};
    color: ${props => props.variant === "primary" ? "#0d66d0" : "currentColor"};
`

export default StyledLink