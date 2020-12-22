import styled from 'styled-components'
import { flexbox, space, layout } from 'styled-system'
import Box from "../Box"

const Flex = styled(Box)(
    {
        display: "flex"
    },
    layout,
    flexbox,
    space
)

export default Flex