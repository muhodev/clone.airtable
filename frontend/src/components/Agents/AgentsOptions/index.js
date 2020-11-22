import React from 'react'
import Flex from "../../Flex"
import Avatar from "../../Avatar"
import { agents } from "../../../__mocks__/selectOptions/"


export function Agent(props) {
    return (
        <Flex alignItems="center">
            <Avatar alt="" src={props.avatar} />
            <div>{props.displayName}</div>
        </Flex>
    )
}

export function agentsOptBuilder() {
    return agents.map(agent => (
        {
            label:
                <Agent
                    avatar={agent.avatar}
                    email={agent.email}
                    displayName={`${agent.name} ${agent.surname}`}
                />,
            value: `${agent.name} ${agent.surname}_${agent.id}`
        }))
}
