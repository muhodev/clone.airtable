import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import styled from "styled-components"
import { ReactComponent as NoteAddIcon } from "../Icons/NoteAdd.svg"
import Flex from '../Flex'
import Select from "react-select"
import agents from "../../__mocks__/agents"
import monthsOpt from "../../__mocks__/monthsOpt"
import hedefKagetoriOpt from "../../__mocks__/hedefKategoriOpt"
import PrimaryButton from '../Button/PrimaryButton'



const LabelDescription = styled.p`
    color: #9599a8;
    font-size: 14px;
`

const ColoredIcon = styled.div`
    color: #8a85ff;
    background-color: #e5e4f7;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;

    svg {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Avatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
`

const Label = styled.h5`
    font-size: 14px;
    padding-bottom: 8px;
`
const InputGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.items ? props.items : "2"}, 1fr);
    grid-gap: 20px;
`

const InputControl = styled.div`
    padding-top: 24px;
`

const PrimaryCaption = styled.div`
    padding-top: 4px;
    font-size: 13px;
    color: #9599a8;
    cursor: pointer;
    text-decoration: underline;
`

function Agent(props) {
    return (
        <Flex alignItems="center">
            <Avatar alt="" src={props.avatar} />
            <div>{props.displayName}</div>
        </Flex>
    )
}

function ModalTitle(props) {

    return (
        <Flex alignItems="center">
            <ColoredIcon>
                <NoteAddIcon />
            </ColoredIcon>
            <p >
                Yeni {props.scopeTitle}
            </p>
        </Flex>
    )
}

function YeniHedefModal(props) {
    const [agentsOpt, setAgentsOpt] = useState([])
    const [agent, setAgent] = useState(null)
    const [ay, setAy] = useState(monthsOpt[new Date().getMonth()])

    useEffect(() => {
        setAgentsOpt(agents.map(agent => (
            {
                label:
                    <Agent
                        avatar={agent.avatar}
                        email={agent.email}
                        displayName={`${agent.name} ${agent.surname}`}
                    />,
                value: `${agent.name} ${agent.surname}_${agent.id}`
            })))
    }, [])

    const selectedAgentHandler = (newValue) => {
        const newValueSplit = newValue.value.split("_") // id
        const agentId = newValueSplit[newValueSplit.length - 1]
        setAgent(agentId)
    }

    const closeModalHandler = () => {
        setAgent(null)
        props.closeModal()
    }

    return (
        <Modal
            isActive={props.isActive}
            closeModal={closeModalHandler.bind(this)}
            title={<ModalTitle scopeTitle={props.scopeTitle} />}
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
                        options={agentsOpt}
                    />
                    {
                        agent &&
                        <PrimaryCaption>
                            Profili görüntüleyin
                        </PrimaryCaption>

                    }
                </InputControl>
                <InputControl>
                    <Label>Takım</Label>
                    <Select
                        placeholder="Bir takım seçin"
                        options={agentsOpt}
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
                <Select
                    placeholder="Bir değer girin"
                    options={agentsOpt}
                />
            </InputControl>
        </Modal>
    )
}

export default YeniHedefModal