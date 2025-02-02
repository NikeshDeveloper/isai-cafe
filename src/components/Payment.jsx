import React from "react";
import axios from "axios";
import './Hero.css';

const Payment = () => {
  const handlePayment = async () => {
    try {
      // Step 1: Call the backend API to create an order
      const response = await axios.post("http://localhost:8080/api/payment/create-order", null, {
        params: { amount: 5 },
      });

      const order = response.data;

      if (!order.id) {
        alert("Order creation failed!");
        return;
      }

      // Step 2: Initialize Razorpay Checkout
      const options = {
        key: "rzp_test_sFYkXCu6opBZRV", // Replace with your Razorpay Key ID
        amount: order.amount, // Amount in paise (50000 means ₹500)
        currency: "INR",
        name: "ISAICafe",
        description: "Payment for order",
        order_id: order.id, // Order ID from backend
        handler: async function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);

          // Step 3: Verify Payment in Backend
          try {
            await axios.post("http://localhost:8080/api/payment/verify", {
              order_id: order.id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });
            alert("Payment Verified Successfully!");
          } catch (error) {
            alert("Payment Verification Failed!");
            console.error("Verification Error:", error);
          }
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <button className="btn-primary" onClick={handlePayment}>Pay ₹5</button>
    </div>
  );
};

export default Payment;
