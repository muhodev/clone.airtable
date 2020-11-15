import React, { useState } from 'react'
import { Layout } from '../components'
import Table from '../components/Table'
import Filter from '../components/Filter'
import Flex from '../components/Flex'
import styled from 'styled-components'
import "../sass/index.scss"
import { ReactComponent as FilterIcon } from "../components/Icons/Filter.svg"

const FilterButton = styled(Flex)`
    cursor:pointer;
`

FilterButton.defaultProps = {
    justifyContent: "space-between",
    alignItems: "center"
}



function App(props) {
    const [isOpenFİlterModal, setOpenFilterModal] = useState(false)
    return (
        <Layout>
            {
                isOpenFİlterModal && <Filter closeModal={setOpenFilterModal.bind(this, false)} />
            }
            <br />
            <Flex justifyContent="space-between" alignItems="center">
                <h3>Tahsilatlar</h3>
                <FilterButton
                    onClick={setOpenFilterModal.bind(this, true)}
                >
                    <span>
                        <FilterIcon />
                    </span>
                    <b>Filtre</b>
                </FilterButton>
            </Flex>
            <br />
            <Table />
        </Layout>
    )
}

export default App