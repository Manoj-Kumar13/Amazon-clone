const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IMV3qBRXDcUi6IhW5rrLVXiE7fEPlM8TTWacgog9SPK4r9AO60mxG3oma0tufV95TJD0t8vhEOmpeN4cL6AGElh00yXVlKCW7"
);

//API

//App config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => {
  res.status(200).send("hello World!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "inr",
  });

  //OK created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-d0950/us-central1/api
