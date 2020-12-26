import React from 'react'
import { Dialog, DialogBody, DialogBodyContainer, DialogClose, DialogHeader, Overlay } from "./style"

import { CloseIcon } from "@/components/Icons"
import { Box } from "@/components"
import SwitchInputType from './SwitchInputType/index'

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
                                    <Box pb={5}>
                                        <SwitchInputType
                                            key={index}
                                            column={column}
                                            data={props.data}
                                        />
                                    </Box>
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