import React from 'react'
import styled from 'styled-components'

const colors = {
    yellow: `background: #ffeab6;color: #37352f;`,
    blue: `background: #2d7ff9;color: #fff;`,
    pink: `background:#ffdce5;color: #4c0c1c`,
    default: `background: #eee; color: #444`
}

const Label = styled.div`
    display: inline-flex;
    border-radius: 999px;
    ${props => colors[props.color] ? colors[props.color] : colors["default"]}
    font-size: 12px;
    padding:3px 6px;
`
Label.defaultProps = {
    colors: "default"
}

function CategoryCellLabel({ valueId, options }) {
    if (!valueId || !options[valueId]) return null

    return (
        <Label color={options[valueId].color}>
            {options[valueId].value}
        </Label>
    )
}

export default CategoryCellLabel;
