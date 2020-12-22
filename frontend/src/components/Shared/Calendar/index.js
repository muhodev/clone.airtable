import React, { useState, useEffect } from 'react'
import moment from "moment"
import { CalendarHeader, CalendarTable, CalendarWrapper, SelectedDate } from "./styled"
import buildCalendar from './buildCalendar'

moment.updateLocale('en', {
    week: {
        dow: 1,
    },
})

function Calendar(props) {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    const [selectedValues, setSelectedValues] = useState([])

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    function selectedHandler(day) {
        setValue(day)

        const formatDay = day.format("DD/MM/YYYY")

        const arr = [...selectedValues]
        const dayIndex = arr.findIndex(arrDay => arrDay === formatDay)

        if (dayIndex === -1) {
            arr.push(formatDay)
        } else {
            arr.splice(dayIndex, 1)
        }

        setSelectedValues(arr)
    }

    function clearAllSelectedValues() {
        const arr = []
        setSelectedValues(arr)
    }

    function isSelected(day) {
        const arrIndex = selectedValues.findIndex(arrDay => arrDay === day.format("DD/MM/YYYY"))
        return arrIndex !== -1
    }

    function isToday(day) {
        return day.isSame(new Date(), "day")
    }

    function dayStyles(day) {
        if (isSelected(day)) return "selected"
        if (isToday(day)) return "today"

        return ""
    }

    return (
        <CalendarWrapper>
            <CalendarHeader>
                <button onClick={clearAllSelectedValues.bind(this)}>Temizle</button>
            </CalendarHeader>

            <CalendarTable>

                <thead>
                    <tr>
                        {
                            ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]
                                .map((weekDay, weekDayId) => (

                                    <th key={weekDayId}>
                                        {weekDay}
                                    </th>
                                ))
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        calendar.map((week, weekId) => (
                            <tr key={weekId} >

                                {
                                    week.map((day, dayId) => (
                                        <td
                                            key={dayId}
                                            onClick={selectedHandler.bind(this, day)}
                                            className={dayStyles(day)}
                                        >
                                            {day.format("D").toString()}


                                        </td>
                                    ))
                                }
                            </tr>
                        ))

                    }
                </tbody>

            </CalendarTable>

        </CalendarWrapper>
    )
}

export default Calendar