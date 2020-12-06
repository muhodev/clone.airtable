import React from 'react'
import styled from 'styled-components'
import TableHeader from "./TableHeader"
import TableContent from "./TableContent"

const TableAppContainer = styled.div`
    position: relative;
    height: calc(100vh - 80px);
`
const TableAppWrapper = styled.div`
    background-color: #fff;
`

const Scrollable = styled.div`
    display: flex;
    overflow-x: auto;
    overflow-y: auto;
    max-width: 100%;
    height: calc(100vh - 122px);
    max-height: calc(100vh - 122px);
`

function Table(props) {
    return (
        <TableAppWrapper>
            <TableAppContainer>
                <TableHeader
                    title={props.title}
                    scopeTitle={props.scopeTitle}
                    creatable={props.creatable}
                    filterable={props.filterable}
                    openCreateModal={props.openCreateModal}
                    path={props.path}
                    columns={props.columns}
                />
                <Scrollable>

                    <TableContent
                        data={props.data}
                        columns={props.columns}
                    />
                </Scrollable>
            </TableAppContainer>
        </TableAppWrapper>
    )
}

export default Table