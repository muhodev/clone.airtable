import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { ReactComponent as ListIcon } from "../../Icons/List.svg"
import { ReactComponent as HideIcon } from "../../Icons/Hide.svg"
import { ReactComponent as FilterIcon } from "../../Icons/Filter.svg"
import { ReactComponent as GroupIcon } from "../../Icons/Group.svg"
import { ReactComponent as SortIcon } from "../../Icons/Sort.svg"
import { ReactComponent as SearchIcon } from "../../Icons/Search.svg"
import { ReactComponent as PeopleIcon } from "../../Icons/People.svg"
import { ReactComponent as SettingIcon } from "../../Icons/Setting.svg"



import PrimaryButton from "../../Button/PrimaryButton"
import Flex from '../../Flex'
import { useHistory } from "react-router-dom"
import Button from "../../Button"
import Select from "react-select"
import { Input } from "../../Form/style"
import Container from "../../Container"

const TableHeaderWrapper = styled(Flex)`
    height: 44px;
    box-shadow: rgba(0,0,0,0.1) 0 2px 0 0;
    background-color: #fff;
`
TableHeaderWrapper.defaultProps = {
    alignItems: "center"
}
const TableHeaderContainer = styled(Container)`
`
const TableHeaderItems = styled(Flex)`
    height: 100%;
    
`

const TableHeaderItemGroup = styled(Flex)`
    padding-right:22px;
    color: #4d4d4d;
    cursor: pointer;
    user-select: none;
    h3 {
        font-size: 14px;
        font-weight: 500;
    }
    svg {
        ${props => props.active && `color: #1283da;`}
        display: flex;
        align-items: center;
        font-size: 14px;
        opacity: .85;
    }
`
const TableHeaderItem = styled.div`
    margin-left: 4px;
`

TableHeaderItemGroup.defaultProps = {
    alignItems: "center"
}

TableHeaderItems.defaultProps = {
    alignItems: "center"
}

const FilterableWrapper = styled.div`
`

const FilterModal = styled.div`
    margin-top: 20px;
    position: fixed;
    right: 80px;
    width: 50vw;
    min-height: 100px;
    border: 1px solid;
    background-color: #fff;
    z-index:999;
    border-radius: 8px;
    border: 1px solid #d2d2d2;
    padding: 24px 28px;
    box-shadow: 4px 6px 20px -4px #b6b7b7;
`

const FilterButton = styled(Flex)`
    cursor:pointer;
    user-select: none;
`

const AddNewButton = styled(PrimaryButton)`
    margin-left: 20px;
`

const SelectWrapper = styled.div`
    width: 100%;
    padding-right: 10px;
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

    const [isOpenFilterModal, setOpenFilterModal] = useState(false)

    const [filters, setFilters] = useState([])
    const [accessorFields, setAccessorFields] = useState([])

    const toggleFilterModal = () => {
        setOpenFilterModal(!isOpenFilterModal)
    }

    useEffect(() => {
        const fields = props.columns.map(column =>
            ({ value: column.accessor, label: column.Header, fieldType: column.fieldType }))
        setAccessorFields(fields)
    }, [])

    const addFilterToState = () => {
        const firstFields = { ...accessorFields[1] }
        setFilters([...filters, firstFields])
    }

    const changeTheFilter = (newValue, index) => {
        const copyFilters = [...filters]
        copyFilters[index] = { ...copyFilters[index], ...newValue }
        setFilters(copyFilters)
    }


    return (
        <TableHeaderWrapper>
            <TableHeaderContainer>
                <TableHeaderItems>
                    <TableHeaderItems>
                        <TableHeaderItemGroup active>
                            <ListIcon />
                            <TableHeaderItem>
                                <h3>Tüm {props.title}</h3>
                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                        <TableHeaderItemGroup>
                            <SettingIcon />
                            <TableHeaderItem>
                                <h3>Ayarlar</h3>
                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                        <TableHeaderItemGroup>
                            <PeopleIcon />
                            <TableHeaderItem>
                                <h3>İzinler</h3>
                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                    </TableHeaderItems>
                    <TableHeaderItems flexAuto>
                        <TableHeaderItemGroup>
                            <HideIcon />
                            <TableHeaderItem>
                                <h3>Alanlar</h3>
                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                        <TableHeaderItemGroup>
                            <FilterIcon />
                            <TableHeaderItem>

                                <h3>Filtre</h3>
                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                        <TableHeaderItemGroup>
                            <GroupIcon />
                            <TableHeaderItem>
                                <h3>Grup</h3>

                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                        <TableHeaderItemGroup>
                            <SortIcon />
                            <TableHeaderItem>
                                <h3>Sıralama</h3>

                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                    </TableHeaderItems>
                    <TableHeaderItems>
                        <TableHeaderItemGroup>
                            <SearchIcon />
                            <TableHeaderItem>

                                <h3>Ara</h3>
                            </TableHeaderItem>
                        </TableHeaderItemGroup>
                    </TableHeaderItems>
                </TableHeaderItems>
            </TableHeaderContainer>
        </TableHeaderWrapper>
    )
}

export default TableHeader