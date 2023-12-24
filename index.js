import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello from server");
});

//Handling non-existing endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

//Handling server-side errors
app.use((err, req, res) => {
  console.log(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

if (process.env.NODE_ENV === "production") {
  app.listen(PORT, () =>
    console.log(`Server running in production mode on port:${PORT}`)
  );
} else {
  app.listen(PORT, () =>
    console.log(`Server running in development mode on port:${PORT} `)
  );
}

// app.listen(PORT, () =>
//   console.log(`Server running on port : http://localhost:${PORT}`)
// );
