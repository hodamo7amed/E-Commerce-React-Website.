import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "./AppClass.css";
import { ShopContext } from "../Context/ShopContext"; // Adjust the path

function Dashboard() {
  const { all_products, addProduct, updateProduct, deleteProduct } =
    useContext(ShopContext);
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [old_price, setOldPrice] = useState("");
  const [new_price, setNewPrice] = useState("");
  const [category, setCategory] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const isLoading = !all_products || all_products.length === 0;

  const handleInputValue = () => {
    if (!Id || !Name || !Image || !old_price || !new_price || !category) {
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const newItem = {
      id: parseInt(Id),
      name: Name,
      image: Image,
      old_price: parseFloat(old_price),
      new_price: parseFloat(new_price),
      category: category.toLowerCase(),
      date: currentDate,
    };

    if (editIndex === -1) {
      addProduct(newItem); // Adding new item
    } else {
      updateProduct(newItem); // Updating existing item
      setEditIndex(-1);
    }

    // Clear input fields
    setId("");
    setName("");
    setImage("");
    setOldPrice("");
    setNewPrice("");
    setCategory("");
  };

  const handleEdit = (index) => {
    const itemToEdit = all_products[index];
    setId(itemToEdit.id.toString());
    setName(itemToEdit.name);
    setImage(itemToEdit.image);
    setOldPrice(itemToEdit.old_price.toString());
    setNewPrice(itemToEdit.new_price.toString());
    setCategory(itemToEdit.category);
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    setEditIndex(-1);
  };

  return (
    <div className="Dashboard" style={{ margin: "5%" }}>
      <h1>Product Management Dashboard</h1>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <div className="d-flex flex-wrap justify-content-center mb-3">
            <input
              type="text"
              placeholder="Item Id"
              value={Id}
              onChange={(e) => setId(e.target.value)}
              className="p-1 m-1"
            />
            <input
              type="text"
              placeholder="Enter Name of Item"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="p-1 m-1"
            />
            <input
              type="number"
              placeholder="Enter Old Price"
              value={old_price}
              onChange={(e) => setOldPrice(e.target.value)}
              className="p-1 m-1"
            />
            <input
              type="number"
              placeholder="Enter New Price"
              value={new_price}
              onChange={(e) => setNewPrice(e.target.value)}
              className="p-1 m-1"
            />
            <input
              type="url"
              placeholder="Enter Image URL"
              value={Image}
              onChange={(e) => setImage(e.target.value)}
              className="p-1 m-1"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-1 m-1"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kid</option>
            </select>
            <Button
              onClick={handleInputValue}
              className="custom-btn m-1"
              disabled={
                !Id || !Name || !Image || !old_price || !new_price || !category
              }
            >
              {editIndex === -1 ? "Add" : "Update"}
            </Button>
          </div>

          <div className="mt-3">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Item Image</th>
                    <th>Old Price</th>
                    <th>New Price</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th width="240px">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {all_products.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{item.old_price}</td>
                      <td>{item.new_price}</td>
                      <td>{item.category}</td>
                      <td>{item.date || "N/A"}</td>
                      <td>
                        <Button
                          onClick={() => handleEdit(index)}
                          className="me-2 custom-btn"
                        >
                          Edit
                        </Button>
                        <Button
                          className="custom-btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
