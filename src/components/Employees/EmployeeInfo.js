function EmployeeInfo({
  name,
  surname,
  visibility,
  department,
  position,
  toggle,
}) {
  return (
    <tr>
      <td onClick={toggle}>
        {name} {surname}
      </td>
      {visibility && (
        <td>
          Department: {department} Position: {position}
        </td>
      )}
    </tr>
  );
}
export default EmployeeInfo;
