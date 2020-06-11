import React from "react";
import "./style.css";

function EmployeeCard(props) {
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
}

export default EmployeeCard;
