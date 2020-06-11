import React from "react";

const EmployeesTable = (props) => {
    const useSortableData = (employees, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);
      
        const sortedEmployees = React.useMemo(() => {
          let sortableEmployees = [...employees];
          if (sortConfig !== null) {
            sortableEmployees.sort((a, b) => {
              if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
              }
              if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
              }
              return 0;
            });
          }
          return sortableEmployees;
        }, [employees, sortConfig]);
      
        const requestSort = (key) => {
          let direction = 'ascending';
          if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
          ) {
            direction = 'descending';
          }
          setSortConfig({ key, direction });
        };
      
        return { employees: sortedEmployees, requestSort, sortConfig };
      };

    const { employees, requestSort, sortConfig } = useSortableData(props.employees);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
              >
                Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('occupation')}
                className={getClassNamesFor('occupation')}
              >
                Occupation
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('location')}
                className={getClassNamesFor('location')}
              >
                Location
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.occupation}</td>
              <td>{employee.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
          }
    export default EmployeesTable;