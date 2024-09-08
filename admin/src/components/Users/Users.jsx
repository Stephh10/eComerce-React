import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Trash } from "phosphor-react";
import useFetchData from "../../hooks/useFetchData";

export default function Users() {
  const { data, setData, loading, error } = useFetchData(
    "http://localhost:3000/getusers"
  );

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
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <h2>Users</h2>
      <Table striped bordered hover className="table-dark text-center">
        <thead>
          <tr className="align-middle">
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
              <tr key={item._id} className="align-middle">
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{admin ? "Yes" : "No"}</td>
                <td className="rowActions">
                  <button onClick={() => handleRemoveUser(item._id)}>
                    <Trash size={25} />
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
