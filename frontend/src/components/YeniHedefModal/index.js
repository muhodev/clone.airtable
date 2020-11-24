import React, { memo, useState } from 'react'
import Select from "react-select"
import { hedefKagetoriOpt, monthsOpt, takimOpt } from "../../__mocks__/selectOptions/"
import { ReactComponent as NoteAddIcon } from "../Icons/NoteAdd.svg"
import Modal from '../Modal/RootModal'

import { Label, LabelDescription, InputControl, InputGroup } from "../Form"
import { Caption } from "../Typography/style"
import { agentsOptBuilder } from "../Agents/AgentsOptions"

import { Input } from "../Form/style"


function YeniHedefModal(props) {
    const [agent, setAgent] = useState(null)
    const [ay, setAy] = useState(monthsOpt[new Date().getMonth()])
    const [takim, setTakim] = useState()

    return (
        <Modal
            title="Yeni Hedef"
            titleIcon={<NoteAddIcon />}
            actionable
            onSave={() => alert("success")}
        >
            <LabelDescription>
                Hedefler, agent ve takım bazlı olarak eklenir. Hedefleri eklemeden önce agent'lerin iş günlerini belirlediğinizden emin olun.
            </LabelDescription>

            <InputGroup>

                <InputControl>
                    <Label>Agent</Label>
                    <Select
                        onChange={(newValue) => setAgent(newValue.value)}
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
                        onChange={newValue => setTakim(newValue.value)}
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
                <Input placeholder="Bir değer giriniz" />
            </InputControl>
        </Modal>
    )
}

export default memo(YeniHedefModal)