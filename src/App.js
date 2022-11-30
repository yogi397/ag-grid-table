import "./styles.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useState, useMemo } from "react";

export default function App() {
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "600px" }),
    []
  );

  const [rowData, setRowData] = useState([
    { id: "c1", make: "Toyota", model: "Celica", price: 35000 },
    { id: "c2", make: "Ford", model: "Mondeo", price: 32000 },
    { id: "c8", make: "Porsche", model: "Boxster", price: 72000 },
    { id: "c4", make: "BMW", model: "M50", price: 60000 },
    { id: "c14", make: "Aston Martin", model: "DBX", price: 190000 }
  ]);
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "", checkboxSelection: true, showDisabledCheckboxes: true },
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ]);

  const onSelectionChanged = (e) => {
    console.log(e.api.getSelectedRows());
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={containerStyle}>
        <div style={{ height: "100%", boxSizing: "border-box" }}>
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              rowSelection={"multiple"}
              rowMultiSelectWithClick={true}
              onSelectionChanged={onSelectionChanged}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
}
