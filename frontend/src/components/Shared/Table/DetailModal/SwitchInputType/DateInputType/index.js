import React from 'react'
import style from "./style.module.css"

import { Label } from "../style.module.css"

function DateInputType(props) {
    return (
        <div className={style.InputWrapper}>
            <div className={Label}>

                Ocak 2021
            </div>
        </div>
    )
}

export default DateInputType