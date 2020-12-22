import React from 'react'
import { Scrollable } from "@/components/"
import { Columns, Rows, Wrapper } from "./Components"

function Content() {
    return (
        <Scrollable>
            <Wrapper>
                <Columns />
                <Rows />
            </Wrapper>
        </Scrollable>
    )
}

export default Content;