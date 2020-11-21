import React from "react"
import styled from 'styled-components'
import { ReactComponent as FilterIcon } from "../../Icons/Filter.svg"
import PrimaryButton from "../../Button/PrimaryButton"
import Flex from '../../Flex'

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
    return (
        <TableHeaderWrapper>

            <Flex justifyContent="space-between" alignItems="center">
                <h3>{props.title}</h3>
                <Flex alignItems="center">

                    <FilterButton
                        onClick={props.openFilter}
                    >
                        <span>
                            <FilterIcon />
                        </span>
                        <b>Filtre</b>
                    </FilterButton>
                    {
                        props.addNew &&
                        <AddNewButton onClick={props.addNew}>Yeni {props.scopeTitle}</AddNewButton>

                    }
                </Flex>
            </Flex>
        </TableHeaderWrapper>
    )
}

export default TableHeader