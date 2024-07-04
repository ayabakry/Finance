import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemTaxRate, setItemTaxRate] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [overallTaxRate, setOverallTaxRate] = useState(1); // Default tax rate 1%

  const addItem = () => {
    const price = parseFloat(itemPrice);
    const qty = parseInt(itemQty);
    const taxRate = parseFloat(itemTaxRate) / 100;
    const subTotal = price * qty;
    const taxAmount = price * taxRate;
    const totalAmount = subTotal + taxAmount * qty;

    const newItem = {
      itemName,
      price,
      qty,
      subTotal,
      taxRate: taxRate * 100,
      taxAmount,
      totalAmount,
    };

    setItems([...items, newItem]);
    setItemName("");
    setItemPrice("");
    setItemQty("");
    setItemTaxRate("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (index) => {
    const updatedItems = [...items];
    const price = parseFloat(updatedItems[index].price);
    const qty = parseInt(updatedItems[index].qty);
    const taxRate = parseFloat(updatedItems[index].taxRate) / 100;
    const subTotal = price * qty;
    const taxAmount = subTotal * taxRate;
    const totalAmount = subTotal + taxAmount;

    updatedItems[index] = {
      ...updatedItems[index],
      subTotal,
      taxRate: taxRate * 100,
      taxAmount,
      totalAmount,
    };

    setItems(updatedItems);
    setEditIndex(null);
  };

  const handleInputChange = (e, index, field) => {
    const updatedItems = [...items];
    updatedItems[index][field] = e.target.value;
    setItems(updatedItems);
  };

  const handleOverallTaxRateChange = (e) => {
    setOverallTaxRate(e.target.value);
  };

  const totalWithoutTax = items.reduce((acc, item) => acc + item.subTotal, 0);
  const totalWithTax = items.reduce((acc, item) => acc + item.totalAmount, 0);
  const overallTaxAmount = (totalWithoutTax * parseFloat(overallTaxRate)) / 100;
  const grandTotal = totalWithTax - overallTaxAmount;

  return (
    <div className="container">
      <h4 style={{ color: "#000F57" }}>Add Item</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Item Price</label>
          <input
            type="number"
            className="form-control"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Qty</label>
          <input
            type="number"
            className="form-control"
            value={itemQty}
            onChange={(e) => setItemQty(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tax Rate %</label>
          <input
            type="number"
            className="form-control"
            value={itemTaxRate}
            onChange={(e) => setItemTaxRate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Item
        </button>
      </form>

      <h4 style={{ color: "#000F57", marginTop: "30px" }}>ITEMS</h4>
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              No.
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Item Name
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Qty
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Item Price
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Sub Total
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Tax Rate %
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Tax Amount
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Total Amount
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <th scope="row" style={{ color: "#000F57" }}>
                {index + 1}
              </th>
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={item.itemName}
                      onChange={(e) => handleInputChange(e, index, "itemName")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.qty}
                      onChange={(e) => handleInputChange(e, index, "qty")}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.price}
                      onChange={(e) => handleInputChange(e, index, "price")}
                    />
                  </td>
                  <td style={{ color: "#000F57" }}>
                    {item.subTotal.toFixed(2)}
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.taxRate}
                      onChange={(e) => handleInputChange(e, index, "taxRate")}
                    />
                  </td>
                  <td style={{ color: "#000F57" }}>
                    {item.taxAmount.toFixed(2)}
                  </td>
                  <td style={{ color: "#000F57" }}>
                    {item.totalAmount.toFixed(2)}
                  </td>
                  <td>
                    <button
                      onClick={() => handleSave(index)}
                      className="btn btn-sm btn-success"
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td style={{ color: "#000F57" }}>{item.itemName}</td>
                  <td style={{ color: "#000F57" }}>{item.qty}</td>
                  <td style={{ color: "#000F57" }}>
                    {Number(item.price).toFixed(2)}
                  </td>
                  <td style={{ color: "#000F57" }}>
                    {item.subTotal.toFixed(2)}
                  </td>
                  <td style={{ color: "#000F57" }}>
                    {item.taxRate.toFixed()}%
                  </td>
                  <td style={{ color: "#000F57" }}>
                    {item.taxAmount.toFixed(2)}
                  </td>
                  <td style={{ color: "#000F57" }}>
                    {item.totalAmount.toFixed(2)}
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(index)}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th scope="col" style={{ color: "white", border: "none" }}></th>
            <th scope="col" style={{ color: "white", border: "none" }}></th>
            <th scope="col" style={{ color: "white", border: "none" }}></th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Total w/out Tax
            </th>
            <th
              scope="col"
              colSpan="2"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              {totalWithoutTax.toFixed(2)}
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Total w/Tax
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              {totalWithTax.toFixed(2)}
            </th>
          </tr>
        </thead>
      </table>

      <br />
      <br />

      <h4 style={{ color: "#000F57" }}>Purchase taxes and charges</h4>
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              No.
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Type
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Account Head
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Tax Rate %
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Amount
            </th>
            <th
              scope="col"
              style={{ color: "white", backgroundColor: "#000F57" }}
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{ color: "#000F57" }}>
              01
            </th>
            <td style={{ color: "#000F57" }}>on total with taxes</td>
            <td style={{ color: "#000F57" }}>ضريبة ارباح تجارية وصناعية</td>
            <td>
              <input
                type="number"
                className="form-control"
                value={overallTaxRate}
                onChange={handleOverallTaxRateChange}
              />
            </td>
            <td style={{ color: "#000F57" }}>{overallTaxAmount.toFixed(2)}</td>
            <td style={{ color: "#000F57" }}>{grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
        <thead>
          <tr style={{}}>
            <th scope="col" style={{ color: "#000F57", border: "none" }}></th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}></th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}></th>
            <th
              scope="col"
              colSpan="2"
              style={{ color: "#000F57", backgroundColor: "#E8E8E8" }}
            >
              Taxes and charges added
            </th>
            <th
              scope="col"
              style={{ color: "#000F57", backgroundColor: "#E8E8E8" }}
            >
              {overallTaxAmount.toFixed(2)}{" "}
            </th>
          </tr>
          <tr style={{}}>
            <th scope="col" style={{ color: "#000F57", border: "none" }}></th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}></th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}></th>
            <th scope="col" colSpan="2" style={{ color: "#000F57" }}>
              Grand Total
            </th>
            <th scope="col" style={{ color: "#000F57" }}>
              {grandTotal.toFixed(2)}
            </th>
          </tr>
          <tr style={{}}>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th
              scope="col"
              colSpan="2"
              style={{ color: "#000F57", backgroundColor: "#E8E8E8" }}
            >
              دائن للمورد
            </th>
            <th
              scope="col"
              style={{ color: "#000F57", backgroundColor: "#E8E8E8" }}
            >
              {grandTotal.toFixed(2)}
            </th>
          </tr>
          <tr style={{}}>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th scope="col" colSpan="2" style={{ color: "#000F57" }}>
              دائن ضريبة
            </th>
            <th scope="col" style={{ color: "#000F57" }}>
              {overallTaxAmount.toFixed(2)}
            </th>
          </tr>
          <tr style={{}}>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th scope="col" style={{ color: "#000F57", border: "none" }}>
              {" "}
            </th>
            <th
              scope="col"
              colSpan="2"
              style={{ color: "#000F57", backgroundColor: "#E8E8E8" }}
            >
              اجمالي التكلفة مدين
            </th>
            <th
              scope="col"
              style={{ color: "#000F57", backgroundColor: "#E8E8E8" }}
            >
              {totalWithTax.toFixed(2)}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
