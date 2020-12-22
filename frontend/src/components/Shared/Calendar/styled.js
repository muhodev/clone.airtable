import styled from 'styled-components'

export const CalendarWrapper = styled.div`
    padding: 14px 20px;
    background-color: #fff;
    display: inline-flex;
    border-radius: 4px;
    border: 1px solid #d2d2d2;


`

export const CalendarTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0px;
    background-color: #fff;
    user-select: none;

    th {
        font-weight: 400;
        font-size: 14px;
        color: #777;
        width: 44px;
        height: 44px;
    }

    td {
            border: 1px solid #d2d2d2;
            box-sizing: border-box !important;
            cursor: pointer !important;
            font-size: 14px !important;
            text-align: center !important;
            color: rgb(72, 72, 72);
            width: 44px;
            height: 44px;
    }
    .selected {
        color: #fff ;
        background-color: #8a85ff;
        border-color: #8a85ff;
    }

    .today {
        background-color: #ddd;
        border-color: #ddd;
    }

`

export const CalendarHeader = styled.header`

`