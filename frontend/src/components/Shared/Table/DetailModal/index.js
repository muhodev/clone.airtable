import React from "react";
import {
  Dialog,
  DialogBody,
  DialogBodyContainer,
  DialogClose,
  DialogHeader,
  Overlay,
} from "./style";

import { CloseIcon } from "@/components/Icons";

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
          <DialogBodyContainer></DialogBodyContainer>
        </DialogBody>
      </Dialog>
    </Overlay>
  );
}

export default DetailModal;
