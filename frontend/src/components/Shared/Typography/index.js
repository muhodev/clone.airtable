import React from 'react'

function Typography(props) {
    return (
        <CustomHTMLTag className={props.className} tag={props.tag}>
            {props.children}
        </CustomHTMLTag>
    )
}

function CustomHTMLTag(props) {
    return React.createElement(props.tag || "div", props, props.children)
}

export default Typography