const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

// Function to generate a signature
const generateSignature = (data, passPhrase) => {
  let pfOutput = "";
  for (let key in data) {
    if (data.hasOwnProperty(key) && data[key] !== "") {
      pfOutput += `${key}=${encodeURIComponent(data[key].trim()).replace(
        /%20/g,
        "+"
      )}&`;
    }
  }
  let getString = pfOutput.slice(0, -1);
  if (passPhrase !== null) {
    getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(
      /%20/g,
      "+"
    )}`;
  }
  return crypto.createHash("md5").update(getString).digest("hex");
};

// Example endpoint to handle checkout
app.post("/checkout", (req, res) => {
  const myData = {
    merchant_id: "10000100",
    merchant_key: "46f0cd694581a",
    return_url: "https://nokami.netlify.app/",
    cancel_url: "http://www.yourdomain.co.za/cancel_url",
    notify_url: "http://www.yourdomain.co.za/notify_url",
    name_first: req.body.name_first,
    name_last: req.body.name_last,
    email_address: req.body.email_address,
    cell_number: req.body.cell_number,
    m_payment_id: req.body.m_payment_id,
    amount: req.body.amount,
    item_name: req.body.item_name,
  };

  const myPassphrase = "jt7NOE43FZPn";
  const signature = generateSignature(myData, myPassphrase);

  // You can now send the signature back or use it in your application logic
  res.json({ signature });
});

// Connect to MongoDB (replace with your own connection string)
mongoose
  .connect(
    "mongodb+srv://Admin:Nokami@nokamicluster.tx7dy.mongodb.net/?retryWrites=true&w=majority&appName=NokamiCluster",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use product routes
app.use("/api/products", productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
