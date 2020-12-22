import styled from 'styled-components'
import { space, layout, color, typography } from 'styled-system'

const Icon = styled.div`
    ${space}
    ${layout}
    ${color}
    ${typography}
    display:flex;
    align-items: center;
    justify-content: center;
    transition: opacity 300ms;
    
    &:hover {
        opacity: .8;
    }

    svg {
        display:flex;
        align-items: center;
        justify-content: center;
        width: 1em;
        height:1em;
        color: inherit !important;
        font-size: inherit !important;
    }

`
Icon.defaultProps = {
    color: "icon.default"
}

export default Icon