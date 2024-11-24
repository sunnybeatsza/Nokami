import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const publicKey = "pk_test_7a08c7580623d798ac3c13eac7c69ec5a7cfecdc";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

  const handleSuccess = () => {
    alert("Payment has been authorized successfully!");
    navigate("/"); // Redirect to the main page on success
  };

  const handleClose = () => {
    alert("Wait! You need to donate, don't go!!!!");
  };

  const componentProps = {
    email,
    amount: amount * 100,
    currency: "ZAR",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <PaystackButton className="paystack-button" {...componentProps} />
    </div>
  );
};
