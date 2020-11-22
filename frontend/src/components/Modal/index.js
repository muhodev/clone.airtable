import React, { memo } from "react"
import PrimaryButton from "../Button/PrimaryButton"
import Flex from "../Flex"
import { ReactComponent as CloseIcon } from "../Icons/Close.svg"
import { ColoredIcon } from "../Icons/style"

import { Overlay, ModalDialog, ModalDialogBody, ModalDialogFooter, ModalDialogHeader } from "./style"

export function ModalTitleWithIcon(props) {

    return (
        <Flex alignItems="center">
            <ColoredIcon>
                {props.icon}
            </ColoredIcon>
            <p >
                Yeni {props.scopeTitle}
            </p>
        </Flex>
    )
}

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