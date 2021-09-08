import { Table } from "react-bootstrap";
const UserTable = ({ users }) => {
  console.log(users);
  return users.length == 0 ? (
    <div>Loading</div>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((ele) => {
          return (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.username}</td>
              <td>{ele.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default UserTable;
