import React from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from "../Icons/Close.svg"

import Select from 'react-select'
import PrimaryButton from '../Button/PrimaryButton'

const options = [
    { label: 'Digital Platform', value: 'digiturk' },
    { label: 'İş Bankası', value: 'isbankasi' },
    { label: 'Taşpınar', value: 'taspinar' }
]

const Dialog = styled.div`
    width: 30%;
    height: 100%;
    background-color: #ffff;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    border: 1px solid #d2d2d2;
    padding: 30px 24px;
`

const DialogHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;

    svg {
        font-size: 28px;
        cursor: pointer;
    }

`

const DialogBody = styled.div`
    overflow-y: scroll;
    height: 80%;
    padding-right: 20px;

    &::-webkit-scrollbar-track
    {
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
        width: 10px;
        background-color: #f2f2f2;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: #ccc;
    }

`

const DialogFooter = styled.footer`
    padding: 20px 0;
`

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.06);
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const FilterGroup = styled.div`
    padding-bottom: 25px;
    font-size: 15px;
`

const FilterLabel = styled.h5`
    padding-bottom: 8px;
    font-size: 14px;
`

function Filter(props) {

    return (
        <Overlay>
            <Dialog>
                <DialogHeader>
                    <h2>
                        Filtre
                    </h2>
                    <div onClick={props.closeModal}>
                        <CloseIcon />
                    </div>
                </DialogHeader>

                <DialogBody>


                    <FilterGroup>
                        <FilterLabel>
                            Kurum
                    </FilterLabel>
                        <Select
                            isMulti
                            placeholder="Bir kurum seçin"
                            isClearable={true}
                            options={options} />
                    </FilterGroup>
                    <FilterGroup>
                        <FilterLabel>
                            Alt Kurum
                    </FilterLabel>
                        <Select
                            isMulti
                            placeholder="Alt kurum seçin"
                            isClearable={true}
                            options={options} />
                    </FilterGroup>

                    <FilterGroup>
                        <FilterLabel>Alan</FilterLabel>
                        <Select
                            isMulti
                            placeholder="Bir alan seçin"
                            isClearable={true}
                            options={options} />
                    </FilterGroup>

                    <FilterGroup>
                        <FilterLabel>Tahsilatı Yapan</FilterLabel>
                        <Select
                            isMulti
                            placeholder="Tahsilatı yapan kişiyi seçin"
                            isClearable={true}
                            options={options}
                        />
                    </FilterGroup>

                    <FilterGroup>
                        <FilterLabel>Tarih</FilterLabel>
                        <Select
                            isMulti
                            placeholder="Tarih aralığını seçin"
                            isClearable={true}
                            options={options}
                        />
                    </FilterGroup>
                    <FilterGroup>
                        <FilterLabel>Kategori</FilterLabel>
                        <Select
                            isMulti
                            placeholder="Bir hedef kategorisi seçin"
                            isClearable={true}
                            options={options}
                        />
                    </FilterGroup>
                </DialogBody>

                <DialogFooter>
                    <PrimaryButton>Uygula</PrimaryButton>
                </DialogFooter>


            </Dialog>
        </Overlay>
    )
}

export default Filter