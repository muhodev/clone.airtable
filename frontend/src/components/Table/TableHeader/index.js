import React from "react"
import styled from 'styled-components'
import { ReactComponent as FilterIcon } from "../../Icons/Filter.svg"
import PrimaryButton from "../../Button/PrimaryButton"
import Flex from '../../Flex'
import { useHistory } from "react-router-dom"

const TableHeaderWrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 20px;
`

const FilterButton = styled(Flex)`
    cursor:pointer;
    user-select: none;
`

const AddNewButton = styled(PrimaryButton)`
    margin-left: 20px;
`

FilterButton.defaultProps = {
    justifyContent: "space-between",
    alignItems: "center"
}

function TableHeader(props) {
    const history = useHistory()

    const openModalHandler = (query) => {
        history.push(`${props.path}?${query}=true`)
    }

    return (
        <TableHeaderWrapper>
            <Flex justifyContent="space-between" alignItems="center">
                <h3>{props.title}</h3>
                <Flex alignItems="center">
                    {
                        props.filterable && (
                            <FilterButton
                                onClick={openModalHandler.bind(this, "filtrele")}
                            >
                                <FilterIcon />
                                <b>Filtre</b>
                            </FilterButton>
                        )
                    }
                    {
                        props.creatable &&
                        <AddNewButton onClick={openModalHandler.bind(this, "yeni")}>
                            Yeni {props.scopeTitle}
                        </AddNewButton>
                    }
                </Flex>
            </Flex>
        </TableHeaderWrapper>
    )
}

export default TableHeader