import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import { createPortal } from "react-dom"
import { Overlay, ModalDialogHeader, ModalDialogFooter, ModalDialogBody, ModalDialog } from "./style"
import { ReactComponent as CloseIcon } from "../Icons/Close.svg"

const rootModalEl = document.getElementById("root_modal")

function RootModal(props) {
    const location = useLocation()
    const history = useHistory()

    const closeModalHandler = () => {
        history.push(location.pathname)
    }
    return createPortal(<Overlay>
        <ModalDialog>
            <ModalDialogHeader>
                <h3>
                    {props.title}
                </h3>
                <div onClick={closeModalHandler.bind(this)}>
                    <CloseIcon />
                </div>
            </ModalDialogHeader>
            <ModalDialogBody>
                {props.children}
            </ModalDialogBody>
            <ModalDialogFooter></ModalDialogFooter>
        </ModalDialog>
    </Overlay>, rootModalEl)
}

export default RootModal