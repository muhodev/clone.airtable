import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import Select from "react-select"
import { hedefKagetoriOpt, monthsOpt, takimOpt } from "../../__mocks__/selectOptions/"
import { ReactComponent as NoteAddIcon } from "../Icons/NoteAdd.svg"
import Modal, { ModalTitleWithIcon } from '../Modal'
import { Label, LabelDescription, InputControl, InputGroup } from "../Form"
import { Caption } from "../Typography/style"
import { agentsOptBuilder } from "../Agents/AgentsOptions"


function YeniHedefModal(props) {

    const [agent, setAgent] = useState(null)
    const [ay, setAy] = useState(monthsOpt[new Date().getMonth()])


    const selectedAgentHandler = (newValue) => {
        const newValueSplit = newValue.value.split("_") // id
        const agentId = newValueSplit[newValueSplit.length - 1]
        setAgent(agentId)
    }

    const closeModalHandler = useCallback(() => {
        setAgent(null)
        props.closeModal()
    }, [])

    return (
        <Modal
            isActive={props.isActive}
            closeModal={closeModalHandler.bind(this)}
            title={<ModalTitleWithIcon icon={<NoteAddIcon />} scopeTitle={props.scopeTitle} />}
        >
            <LabelDescription>
                Hedefler, agent ve takım bazlı olarak eklenir. Hedefleri eklemeden önce agent'lerin iş günlerini belirlediğinizden emin olun.
            </LabelDescription>

            <InputGroup>

                <InputControl>
                    <Label>Agent</Label>
                    <Select
                        onChange={selectedAgentHandler.bind(this)}
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