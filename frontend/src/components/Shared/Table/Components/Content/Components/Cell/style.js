import styled from "styled-components"

export const CellWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.selected ? "#2d7ff9" : "transparent"};
    display: flex;
    align-items: center;
    border-radius: 2px;
    transition: .3;
`

export const CellCheckbox = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 8px;


    &:hover {
        .cell-checkbox-hover {
            display: flex;
        }
    }

    .cell-checkbox-hover {
        display: ${props => props.active ? "flex" : "none"};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        align-items: center;
        justify-content: space-between;
        padding-left: 8px;
        transition: .3;
    }
`