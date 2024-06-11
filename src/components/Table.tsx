import React, { ReactNode } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface Column {
  id: string;
  label: string;
  renderCell?: (columnId: string) => ReactNode;
}

interface TableProps {
  columns: Column[];
  data?: { [key: string]: any }[];
  renderCell?: (
    cellData: any,
    columnId: string,
    row: any,
    openDelete?: (id: number) => void,
  ) => ReactNode;
  onRowClick?: (data: any) => void;
  openDelete?: (id: number) => void;
  isInDetail?: boolean;
  containerClassName?: string;
  onHeadCheckClick?: (checked: boolean) => void;
  isAllChecked?: boolean;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  renderCell,
  onRowClick,
  openDelete,
}) => {
  return (
    <div className="bg-gray-400 min-w-8/11">
      <div className="">
        <MuiTable className="">
          <TableHead style={{ width: "100%", background: "#696e76" }}>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell key={column.id}>
                    {column.renderCell
                      ? column.renderCell(column.id)
                      : column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow
                sx={{ marginTop: "5px", background: "#aeb2b9" }}
                key={row.id}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => {
                  if (column.id === "index") {
                    return <TableCell key={column.id}>{index + 1}</TableCell>;
                  }
                  return (
                    <TableCell key={column.id}>
                      {renderCell
                        ? renderCell(row[column.id], column.id, row, openDelete)
                        : row[column.id]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </div>
    </div>
  );
};

export default Table;
