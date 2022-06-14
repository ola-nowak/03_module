import { useState } from "react";
import EmployeeInfo from "./EmployeeInfo";
import { data } from "./data";

function Employees() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(() => !isVisible);
  };
  return (
    <table>
      <tr>
        <th>Name and Surname:</th>
        {isVisible && <th>Details:</th>}
      </tr>
      {data.map((element, index) => {
        return (
          <EmployeeInfo
            key={`employee_${index}`}
            name={element.name}
            surname={element.surname}
            visibility={isVisible}
            department={element.department}
            position={element.position}
            toggle={toggleVisibility}
          />
        );
      })}
    </table>
  );
}
export default Employees;
