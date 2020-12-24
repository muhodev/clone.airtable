import React from 'react'
import { Dialog, DialogBody, DialogBodyContainer, DialogClose, DialogHeader, InputGroup, Label, Overlay } from "./style"

import { CloseIcon } from "@/components/Icons"
import SwitchInputType from './SwitchInputType'

function DetailModal(props) {
    return (
        <Overlay>
            <Dialog>
                <DialogHeader>
                    <DialogClose onClick={props.closeModal}>
                        <CloseIcon />
                    </DialogClose>
                </DialogHeader>
                <DialogBody>
                    <DialogBodyContainer>
                        {
                            props.columns.map((column, index) => {
                                return (
                                    <SwitchInputType
                                        key={index}
                                        column={column}
                                        data={props.data}
                                    />
                                )
                            })
                        }
                    </DialogBodyContainer>
                </DialogBody>
            </Dialog>
        </Overlay>
    )
}

export default DetailModal