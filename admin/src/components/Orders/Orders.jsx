import React from "react";
import "./Orders.css";
import Table from "react-bootstrap/Table";
import useFetchData from "../../hooks/useFetchData";
import { formatDate } from "../../helpers/formatDate";
import { Gear, Trash } from "phosphor-react";

export default function Orders() {
  const { data, setData, loading, error } = useFetchData(
    "http://localhost:3000/getorders"
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  console.log(data);
  return (
    <div>
      <h2>Orders</h2>
      <Table striped bordered hover className="table-dark text-center  ">
        <thead>
          <tr className="align-middle">
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Adress</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => {
            const { formattedDate } = formatDate(order.products[0].date);
            return (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>Kevin</td>
                <td>{formattedDate}</td>
                <td>{order.address}</td>
                <td>100$</td>
                <td>{order.status}</td>
                <td className="rowActions">
                  <button>
                    <Gear size={25} />
                  </button>
                  <button>
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
