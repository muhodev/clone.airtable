import styled from 'styled-components'

export const CalendarWrapper = styled.div`
    width: 210px;
`

export const CalendarGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(7, 1fr);
    text-align: right;

`

export const SelectedDate = styled.div`
    color: #fff;
    background-color: blue;
`