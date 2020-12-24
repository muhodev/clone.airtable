import styled from 'styled-components'

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00000040;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    z-index: 99999;
`

export const Dialog = styled.div`
    position: absolute;
    width: 40%;
    height: calc(90% - 48px);
    top: 48px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
    position: relative;
`

export const DialogHeader = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 48px;
`

export const DialogClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 22px;
    height: 22px;
    top: -10px;
    right: -10px;
    background-color: #666;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: #222;
    }
    svg {
        font-size: 12px;
        color: #fff;
    }
`


export const DialogBody = styled.div`
    width: 100%;
    position: absolute;
    top: 48px;
    bottom: 5px;
    overflow-y: hidden;
    padding-right: 2px;
`

export const DialogBodyContainer = styled.div`
    padding: 0 32px;
    overflow-y: scroll;
    height: 100%;
`
export const InputGroup = styled.div`
    margin-bottom: 28px;
    input {
        border: 2px solid #0000001a;
        color: #444;
        font-size: 14px;
    }
`

export const Label = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg {
        display: flex;
        align-items: flex-end;
        font-size: 16px;
    }
    span {
        margin-left: 4px;
        font-size: 14px;
        line-height: 1;
        font-weight: 400;
        opacity: .5;
    }
`