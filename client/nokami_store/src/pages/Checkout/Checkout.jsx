import React from "react";
import { useFormik } from "formik";

export const Checkout = () => {
  const formik = useFormik({
    initialValues: {
      name_first: "John",
      name_last: "Doe",
      email_address: "makgerutumisho55@gmail.com",
      cell_number: "0823456789",
      merchant_id: "10000100",
      merchant_key: "46f0cd694581a",
      amount: 100.0,
      item_name: "Test Product",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:5000/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Create a form dynamically and submit it to PayFast sandbox
        const form = document.createElement("form");
        form.action = "https://sandbox.payfast.co.za/eng/process";
        form.method = "POST";
        // Add required hidden inputs
        form.innerHTML = `
          <input type="hidden" name="merchant_id" value="${values.merchant_id}" />
          <input type="hidden" name="merchant_key" value="${values.merchant_key}" />
          <input type="hidden" name="amount" value="${values.amount}" />
          <input type="hidden" name="item_name" value="${values.item_name}" />
          <input type="hidden" name="return_url" value="https://nokami.netlify.app/confirmation" />
          <input type="hidden" name="signature" value="${data.signature}" />
        `;

        document.body.appendChild(form);
        form.submit();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name_first"
          onChange={formik.handleChange}
          value={formik.values.name_first}
          placeholder="First Name"
        />
        <input
          type="text"
          name="name_last"
          onChange={formik.handleChange}
          value={formik.values.name_last}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email_address"
          onChange={formik.handleChange}
          value={formik.values.email_address}
          placeholder="Email"
        />
        <input
          type="text"
          name="cell_number"
          onChange={formik.handleChange}
          value={formik.values.cell_number}
          placeholder="Cell Number"
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};
