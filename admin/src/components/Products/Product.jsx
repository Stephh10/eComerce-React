import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { app } from "../../firebase";

export default function Product() {
  const [products, setProduct] = useState([]);
  const storage = getStorage(app);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/getproducts");
        const resData = await response.json();
        setProduct(resData);
      } catch (error) {
        toast.error(error);
      }
    }
    fetchProducts();
  }, []);

  async function removeProduct(product) {
    await fetch(`http://localhost:3000/deleteproduct/${product._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setProduct((allProducts) =>
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
          {products.map((product, index) => {
            const avalible = product.avalible;
            return (
              <tr className="align-middle" key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.old_price}$</td>
                <td>{product.new_price}$</td>
                <td>{avalible ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => removeProduct(product)}
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
