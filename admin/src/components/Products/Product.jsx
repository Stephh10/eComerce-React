import React from "react";
import Table from "react-bootstrap/Table";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { app } from "../../firebase";
import { Trash } from "phosphor-react";
import useFetchData from "../../hooks/useFetchData";

export default function Product() {
  const storage = getStorage(app);

  const { data, setData, loading, error } = useFetchData(
    "http://localhost:3000/getproducts"
  );

  async function removeProduct(product) {
    await fetch(`http://localhost:3000/deleteproduct/${product._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setData((allProducts) =>
      allProducts.filter((prod) => prod._id !== product._id)
    );

    const delImage = ref(storage, product.name);

    deleteObject(delImage)
      .then(() => {
        console.log("All good");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <Table striped bordered hover className="table-dark text-center  ">
        <thead>
          <tr className="align-middle">
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
          {data.map((product, index) => {
            const avalible = product.avalible;
            return (
              <tr className="align-middle" key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.old_price}$</td>
                <td>{product.new_price}$</td>
                <td>{avalible ? "Yes" : "No"}</td>
                <td className="rowActions">
                  <button onClick={() => removeProduct(product)}>
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
