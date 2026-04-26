import { useState } from "react";
import axios from "axios";

function AddItemPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 DEBUG (check if data is going)
    console.log({ name, price, couponCode });

    try {
      const res = await axios.post("http://localhost:5000/api/items", {
        name,
        price,
        couponCode,
      });

      console.log("Saved:", res.data);

      alert("Item Added!");

      // ✅ clear form
      setName("");
      setPrice("");
      setCouponCode("");

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error adding item");
    }
  };

  return (
    <div>
      <h2>Add Item</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Coupon Code */}
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemPage;