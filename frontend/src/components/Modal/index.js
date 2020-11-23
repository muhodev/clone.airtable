import React, { memo } from "react"
import PrimaryButton from "../Button/PrimaryButton"
import { ReactComponent as CloseIcon } from "../Icons/Close.svg"

import { Overlay, ModalDialog, ModalDialogBody, ModalDialogFooter, ModalDialogHeader } from "./style"

function Modal(props) {
    console.log("rendering modal")
    return (
        props.isActive &&
        <Overlay>
            <ModalDialog>
                <ModalDialogHeader>
                    <h3>
                        {props.title}
                    </h3>
                    <div onClick={props.closeModal}>
                        <CloseIcon />
                    </div>
                </ModalDialogHeader>
                <ModalDialogBody>
                    {props.children}
                </ModalDialogBody>
                <ModalDialogFooter>
                    <PrimaryButton>
                        Kaydet
                    </PrimaryButton>
                </ModalDialogFooter>
            </ModalDialog>
        </Overlay>
    )
}

export default memo(Modal)