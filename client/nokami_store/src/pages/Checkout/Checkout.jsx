import React, { useState } from "react";

export const Checkout = () => {
  const [signature, setSignature] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the FormData object to prepare form data for submission
    const formData = new FormData(e.target);

    try {
      const response = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSignature(data.signature); // Assuming the server returns a signature
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form
        onSubmit={handleSubmit}
        action="https://sandbox.payfast.co.za/eng/process"
        method="post"
      >
        <input type="hidden" name="name_first" value="John" />
        <input type="hidden" name="name_last" value="Doe" />
        <input
          type="hidden"
          name="email_address"
          value="makgerutumisho55@gmail.com"
        />
        <input type="hidden" name="cell_number" value="0823456789" />
        <input type="hidden" name="merchant_id" defaultValue={10000100} />
        <input type="hidden" name="merchant_key" defaultValue="46f0cd694581a" />
        <input
          type="hidden"
          name="return_url"
          value="https://nokami.netlify.app/"
        />
        <input
          type="hidden"
          name="cancel_url"
          value="http://localhost:3000/cancel"
        />{" "}
        {/* Corrected URL */}
        <input
          type="hidden"
          name="notify_url"
          value="https://www.example.com/notify"
        />
        <input type="hidden" name="amount" defaultValue={100.0} />
        <input type="hidden" name="item_name" defaultValue="Test Product" />
        <input type="submit" value="Pay Now" />
      </form>
      {signature && <p>Signature: {signature}</p>}{" "}
      {/* Display the signature if available */}
    </div>
  );
};
