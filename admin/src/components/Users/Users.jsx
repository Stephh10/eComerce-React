import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch("http://localhost:3000/getusers");

      const resData = await response.json();
      setData(resData);
    }

    handleFetch();
  }, []);

  async function handleRemoveUser(id) {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };

    const response = await fetch("http://localhost:3000/removeuser", options);

    if (response.ok) {
      setData((prevData) => prevData.filter((user) => user._id !== id));
    }

    const resData = await response.json();
  }

  console.log(data);
  return (
    <div>
      <h2>Users</h2>
      <Table striped bordered hover className="table-dark text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>isAdmin</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            const admin = item?.isAdmin;
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{admin ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => handleRemoveUser(item._id)}
                    className="removeBtn"
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
