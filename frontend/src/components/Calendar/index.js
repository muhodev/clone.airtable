import React, { useState, useEffect } from 'react'
import moment from "moment"
import { CalendarGrid, CalendarWrapper, SelectedDate } from "./styled"
import buildCalendar from './buildCalendar'

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

            {
                calendar.map((week, weekId) => (
                    <CalendarGrid key={weekId}>
                        {
                            week.map((day, dayId) => (
                                <div key={dayId} onClick={() => setValue(day)}>
                                    {
                                        value.isSame(day, "day") ?
                                            <SelectedDate>
                                                {day.format("D").toString()}
                                            </SelectedDate> :
                                            <div>
                                                {day.format("D").toString()}
                                            </div>
                                    }
                                </div>
                            ))
                        }
                    </CalendarGrid>
                ))

            }

        </CalendarWrapper>
    )
}

export default Calendar