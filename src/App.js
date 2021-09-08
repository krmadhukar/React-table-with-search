import { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "./UserSearch";
export default function App() {
  const [users, setUsers] = useState([]);
  const [userTableData, changeTableData] = useState([]);
  const [search, changeValue] = useState("");
  const fetchUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = await users.json();
    setUsers(userList);
    changeTableData(userList);
  };
  useEffect(() => {
    changeTableData(
      users.filter((ele) => {
        const str = search.toUpperCase();
        return (
          ele.name.toUpperCase().includes(str) ||
          ele.username.toUpperCase().includes(str) ||
          ele.email.toUpperCase().includes(str)
        );
      })
    );
  }, [search, users]);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <div>
        <label>Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            changeValue(e.target.value);
          }}
        />
      </div>
      <br />
      <UserTable users={userTableData} />
    </div>
  );
}
