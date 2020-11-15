import React, { useState, useEffect } from 'react'
import moment from "moment"
import { CalendarTable, CalendarWrapper, SelectedDate } from "./styled"
import buildCalendar from './buildCalendar'

moment.updateLocale('en', {
    week: {
        dow: 1,
    },
})

function Calendar(props) {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    function isSelected(day) {
        return value.isSame(day, "day")
    }

    function beforeToday(day) {
        return day.isBefore(new Date(), "day")
    }

    function isToday(day) {
        return day.isSame(new Date(), "day")
    }

    return (
        <CalendarWrapper>

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
                                            onClick={() => setValue(day)}
                                            className={`${value.isSame(day, 'day') ? 'selected' : ""}`
                                            }
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