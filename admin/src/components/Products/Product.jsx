import React from "react";
import Table from "react-bootstrap/Table";

export default function Product() {
  return (
    <div>
      <h2>Products</h2>
      <Table striped bordered hover className="table-dark text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Old Price</th>
            <th>Price</th>
            <th>Avalible</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bluse</td>
            <td>Women</td>
            <td>100$</td>
            <td>90$</td>
            <td>Yes$</td>
            <td>
              <button className="removeBtn">X</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
