import React, { useState } from "react";
import { Table } from "@/components";
import { TableContext, TableProvider, useTable } from "@/context";

function SpaceIdLegacy(props) {
  const [data, setData] = useState([
    {
      agent: "A kişisi",
      takim: "Digitürk İcra Takımı",
      ay: "Aralık 2020",
      hedefKategorisi: "anapara",
      hedefDegeri: "₺110.000",
    },
  ]);

  const [columns, setColumns] = useState([
    {
      Header: "Agent",
      accessor: "agent",
      sortType: "basic",
      type: "linkRecord",
    },
    {
      Header: "Takım",
      accessor: "takim",
      sortType: "basic",
      type: "linkRecord",
    },
    {
      Header: "İş Günü",
      accessor: "ay",
      sortType: "basic",
      type: "text",
    },
    {
      Header: "Kategori",
      accessor: "hedefKategorisi",
      sortType: "basic",
      type: "select",
      options: {
        anapara: { id: "anapara", value: "Anapara", color: "yellow" },
        vekaletUcreti: {
          id: "vekaletUcreti",
          value: "Vekalet Ücreti",
          color: "pink",
        },
      },
    },
    {
      Header: "Hedef Değeri",
      accessor: "hedefDegeri",
      sortType: "basic",
      type: "text",
    },
  ]);

  const getDataByCol = (rowIndex, colId) => {
    return data[rowIndex][colId];
  };

  const addColumn = (column) => {
    const copyColumns = [...columns];
    copyColumns.push(column);
    setColumns(copyColumns);
  };

  const updateData = (rowIndex, colId, updatedValue) => {
    const copyData = [...data];
    copyData[rowIndex][colId] = updatedValue;
    setData(copyData);
  };

  return (
    <TableContext.Provider
      value={{ data, columns, addColumn, updateData, getDataByCol }}
    >
      <Table
        filterable
        creatable
        title="Hedefler"
        scopeTitle="Hedef"
        data={data}
        path="/hedefler"
      />
    </TableContext.Provider>
  );
}

function TableId(props) {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default TableId;
