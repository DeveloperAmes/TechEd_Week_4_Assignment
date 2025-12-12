import express from "express";
import cors from "cors";
import { dbPool } from "./dbConnection.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Server is up and running!" });
});

app.get("/reviews", (req, res) => {
  res.json({ message: "Here are the reviews!" });
});

app.post("/reviews", (req, res) => {
  const reviewsData = req.body.formValues;
  const query = dbPool.query(
    `INSERT INTO reviews (name, date_visited, review) VALUES ($1, $2, $3)`[
      (reviewsData.name, reviewsData.date_visited, reviewsData.review)
    ]
  );
  res.json({ message: "Testimonial received!" });
});
