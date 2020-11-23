import styled from 'styled-components'
import Flex from "../Flex"

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.1);
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalDialog = styled.div`
    background-color: #fff;
    width: ${props => props.width ? props.width : "45%"};
    height: 85%;
    border-radius: 8px;
    border: 1px solid #d2d2d2;
    padding: 24px 28px;
    box-shadow: 4px 6px 20px -4px #b6b7b7;
`

export const ModalDialogHeader = styled(Flex)`
    padding-bottom: 12px; 
    svg {
        font-size: 28px;
        cursor: pointer;
    }
`

ModalDialogHeader.defaultProps = {
    alignItems: "center",
    justifyContent: "space-between"
}


export const ModalDialogBody = styled.div`
    overflow-y: scroll;
    height: 70%;
    padding-left: 2px;
    padding-right: 20px;

    &::-webkit-scrollbar-track
    {
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
        width: 6px;
        background-color: #f2f2f2;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: #ccc;
    }

`

export const ModalDialogFooter = styled.footer`
    padding: 20px 0;
`