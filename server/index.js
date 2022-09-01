const express = require("express");
const connectToMongo = require("./db/db");

const app = express();
connectToMongo();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
// app.use("/", (req, res) => {
//   res.json({ path: "home" });
// });
app.listen(port, () => {
  console.log(`application backend is running at http://localhost:${port}`);
});
