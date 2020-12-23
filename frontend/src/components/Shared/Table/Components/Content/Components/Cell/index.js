import styled from "styled-components"

const Cell = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid #f0f0f0;
    background-color: #fff;
    border-bottom: 1px solid #dde1e3;
    cursor: pointer;

`
Cell.defaultProps = {
    style: { width: "180px" }
}


export default Cell
