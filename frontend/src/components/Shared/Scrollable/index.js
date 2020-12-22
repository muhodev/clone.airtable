import styled from 'styled-components'
import { Flex } from "@/components/Shared"

const Scrollable = styled(Flex)`
    overflow-x: auto;
    overflow-y: auto;
    max-width: 100%;
    height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
`

export default Scrollable