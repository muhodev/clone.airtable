import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import { createPortal } from "react-dom"
import { Overlay, ModalDialogHeader, ModalDialogFooter, ModalDialogBody, ModalDialog } from "./style"
import { ReactComponent as CloseIcon } from "../Icons/Close.svg"
import { ColoredIcon } from "../Icons/style"
import Flex from "../Flex"
import PrimaryButton from "../Button/PrimaryButton"

const rootModalEl = document.getElementById("root_modal")

function RootModal(props) {
    const location = useLocation()
    const history = useHistory()

    const closeModalHandler = () => {
        history.push(location.pathname)
    }
    return createPortal(<Overlay>
        <ModalDialog width={props.width}>
            <ModalDialogHeader>
                <Flex alignItems="center">

                    {
                        props.titleIcon && <ColoredIcon>{props.titleIcon}</ColoredIcon>
                    }
                    <h3>
                        {props.title}
                    </h3>
                </Flex>

                <div onClick={closeModalHandler.bind(this)}>
                    <CloseIcon />
                </div>
            </ModalDialogHeader>
            <ModalDialogBody>
                {props.children}
            </ModalDialogBody>
            <ModalDialogFooter>
                {
                    props.actionable && <PrimaryButton onClick={props.onSave}>Kaydet</PrimaryButton>
                }
            </ModalDialogFooter>
        </ModalDialog>
    </Overlay>, rootModalEl)
}

export default RootModal