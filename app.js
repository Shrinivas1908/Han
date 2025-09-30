const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Hardcoded retailer data (id, name, city, address, contact info)
const retailers = [
  {
    id: 1,
    name: "Hardware Hub - Downtown",
    city: "Mumbai",
    address: "123 Main Street, Mumbai",
    phone: "+91 9876543210",
    email: "contact@hardwarehub.in",
    website: "https://hardwarehub.in",
  },
  {
    id: 2,
    name: "Tools & More",
    city: "Delhi",
    address: "45 Industrial Area, Delhi",
    phone: "+91 9123456789",
    email: "info@toolsandmore.in",
    website: "https://toolsandmore.in",
  },
  {
    id: 3,
    name: "Builder's Supply Co.",
    city: "Bangalore",
    address: "678 Construction Ave, Bangalore",
    phone: "+91 9988776655",
    email: "support@buildersupply.in",
    website: "https://buildersupply.in",
  }
];

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Main route - render homepage with retailers data
app.get("/", (req, res) => {
  res.render("index", { retailers });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
