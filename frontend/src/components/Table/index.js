import React, { useEffect } from 'react'
import TableHeader from "./TableHeader"
import TableContent from "./TableContent"


function Table(props) {
    return (
        <div>
            <TableHeader
                title={props.title}
                scopeTitle={props.scopeTitle}
                creatable={props.creatable}
                filterable={props.filterable}
                openCreateModal={props.openCreateModal}
                path={props.path}
            />
            <TableContent
                data={props.data}
                columns={props.columns}
            />
        </div>
    )
}

export default Table