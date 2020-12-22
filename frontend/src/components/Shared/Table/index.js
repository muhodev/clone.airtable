import React from 'react'
import { Actions, Content } from "./Components"

function Table(props) {
    return (
        <>
            <Actions />
            <Content
                data={props.data}
            />
        </>

    )
}

export default Table