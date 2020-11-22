import React, { memo, useCallback, useState } from 'react'
import Select from "react-select"
import { hedefKagetoriOpt, monthsOpt, takimOpt } from "../../__mocks__/selectOptions/"
import { ReactComponent as NoteAddIcon } from "../Icons/NoteAdd.svg"
import { ModalTitleWithIcon } from '../Modal'
import Modal from '../Modal/RootModal'

import { Label, LabelDescription, InputControl, InputGroup } from "../Form"
import { Caption } from "../Typography/style"
import { agentsOptBuilder } from "../Agents/AgentsOptions"

// {value: "deger_id", label:"değer"} select optionsdaki idleri local state'e kaydetmek için kullanılır
const selectedId = (newValue) => {
    const newValueSplit = newValue.value.split("_")
    const newValueId = newValueSplit[newValueSplit.length - 1]
    return newValueId
}

function YeniHedefModal(props) {
    console.log("rendering yenihedefmodal")
    const [agent, setAgent] = useState(null)
    const [ay, setAy] = useState(monthsOpt[new Date().getMonth()])
    const [takim, setTakim] = useState()

    const closeModalHandler = useCallback(() => {
        setAgent(null)
        props.closeModal()
    }, [])

    return (
        <Modal
            title={
                <ModalTitleWithIcon
                    icon={<NoteAddIcon />}
                    scopeTitle={props.scopeTitle}
                />
            }
        >
            <LabelDescription>
                Hedefler, agent ve takım bazlı olarak eklenir. Hedefleri eklemeden önce agent'lerin iş günlerini belirlediğinizden emin olun.
            </LabelDescription>

            <InputGroup>

                <InputControl>
                    <Label>Agent</Label>
                    <Select
                        onChange={(newValue) => setAgent(selectedId(newValue))}
                        placeholder="Bir agent seçin"
                        options={agentsOptBuilder()}
                    />
                    {
                        agent &&
                        <Caption>
                            Profili görüntüleyin
                        </Caption>

                    }
                </InputControl>
                <InputControl>
                    <Label>Takım</Label>
                    <Select
                        placeholder="Bir takım seçin"
                        onChange={newValue => setTakim(selectedId(newValue))}
                        options={takimOpt}
                    />
                </InputControl>
            </InputGroup>

            <InputGroup>


                <InputControl>
                    <Label>Ay</Label>
                    <Select
                        placeholder="Bir ay seçin"
                        options={monthsOpt}
                        onChange={setAy.bind(this, ay)}
                        defaultValue={ay}
                    />
                </InputControl>
                <InputControl>
                    <Label>Kategori</Label>
                    <Select
                        placeholder="Hedef kategorisini seçin"
                        options={hedefKagetoriOpt}
                    />
                </InputControl>

            </InputGroup>
            <InputControl>
                <Label>Değer</Label>
            </InputControl>
        </Modal>
    )
}

export default memo(YeniHedefModal)