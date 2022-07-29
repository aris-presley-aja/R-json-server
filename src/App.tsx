import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import { v4 as uuidv4 } from 'uuid';

type Employee = {
  address: string;
  email: string;
  id: number;
  name: string;
};

const App = () => {
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    loadEmployees(1, 20);
  }, []);

  useEffect(() => {
    loadEmployees(1, 20, query.length > 2 ? query : "");
  }, [query]);
  
  const loadEmployees = async (page: number, limit: number, query = "") => {
    // key={uuidv4()}
    const url = `/employees?_page=${page}&_limit=${limit}&q=${query}`;
    const _employees = await axios
      .get<Employee[]>(url)
      .then(({ data }) => data);

    setEmployees(_employees);
  };
// {
// var employee = employees.map .caller.function('employee', 'index' )

// }

  return (
    <div className="App">
      <div className="search_form">
        <label className="search_form--label">Cari Pegawai</label>
        <input
          className="search_form--input"
          type="array"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
      </div>
      <div className="employee_list">
            {employees.map((employee) => {
          return (
            <><>
              <table width="auto">
                <thead></thead>
                <tbody>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td key={employee.name.toString()}>
                  <div className="employee_list--item-name">{employee.name}</div>
                  </td>
                  <td key={employee.address.toString()}>
                  <div className="employee_list--item-address">
                  {employee.address}
                </div>
                  </td>
                  <td key={employee.email.toString()}>
                  <div className="employee_list--item-email">{employee.email}</div>
                  </td>
                </tr>
                </tbody>
                <tfoot></tfoot>

              </table>
            </><div className="employee_list--item">
                {/* <div className="employee_list--item-name">{employee.name}</div> */}
                {/* <div className="employee_list--item-address">
                  {employee.address}
                </div> */}
                {/* <div className="employee_list--item-email">{employee.email}</div> */}
              </div></>
          );
              
        })}
      </div>
    </div>

  );
};

export default App;
